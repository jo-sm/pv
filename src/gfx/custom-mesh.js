import { vec3, mat3 } from '@mapbox/gl-matrix';
import { forceRGB } from '../color';
import SceneNode from './scene-node';
import { ProtoSphere, ProtoCylinder } from './geom-builders';
import { buildRotation } from '../geom';
import IndexedVertexArray from './indexed-vertex-array';

// number of ids to be allocated whenever we run out of objects. This would
// ideally depend on number of objects the user is going to create.
var ID_CHUNK_SIZE = 100;

// small helper with the same interface as IndexedVertexArray that can be used
// as a drop-in when the number of vertices/indices is not known in advance.
class DynamicIndexedVertexArray {
  constructor() {
    this._vertData = [];
    this._indexData = [];
    this._numVerts = 0;
  }

  numVerts() {
    return this._numVerts;
  }

  addVertex(pos, normal, color, objId) {
    this._numVerts += 1;
    this._vertData.push(pos[0], pos[1], pos[2],
                        normal[0], normal[1], normal[2],
                        color[0], color[1], color[2], color[3],
                        objId, 0.0);
  }

  addTriangle(indexOne, indexTwo, indexThree) {
    this._indexData.push(indexOne, indexTwo, indexThree);
  }

  numIndices() {
    return this._indexData.length;
  }

  indexData() {
    return this._indexData;
  }

  vertData() {
    return this._vertData;
  }
}

// FIXME: these are duplicated from render.js and should be moved to a
// common module
function capTubeStart(va, baseIndex, numTubeVerts) {
  for (var i = 0; i < numTubeVerts - 1; ++i) {
    va.addTriangle(baseIndex, baseIndex + 1 + i, baseIndex + 2 + i);
  }
  va.addTriangle(baseIndex, baseIndex + numTubeVerts, baseIndex + 1);
}

function capTubeEnd(va, baseIndex, numTubeVerts) {
  var center = baseIndex + numTubeVerts;
  for (var i = 0; i < numTubeVerts - 1; ++i) {
    va.addTriangle(center, baseIndex + i + 1, baseIndex + i);
  }
  va.addTriangle(center, baseIndex, baseIndex + numTubeVerts - 1);
}

export default class CustomMesh extends SceneNode {
  constructor(name, gl, float32Allocator, uint16Allocator, idPool) {
    super(gl);
    this._float32Allocator = float32Allocator;
    this._uint16Allocator = uint16Allocator;
    this._data = new DynamicIndexedVertexArray();
    this._protoSphere = new ProtoSphere(8, 8);
    this._protoCyl = new ProtoCylinder(8);
    this._va = null;
    this._idRanges = [];
    this._idPool = idPool;
    this._ready = false;
    this._currentRange = null;
  }

  updateSquaredSphereRadius(center, radius) {
    return radius;
  }

  addTube(start, end, radius, options) {
    var midPoint = vec3.create();
    var left = vec3.create();
    var up = vec3.create();
    var dir = vec3.create();
    var rotation = mat3.create();
    options = options || {};
    var color = forceRGB(options.color || 'white');
    var cap = true;
    if (options.cap !== undefined) {
      cap = options.cap;
    }
    vec3.sub(dir, end, start);
    var length = vec3.length(dir);
    vec3.normalize(dir, dir);
    vec3.add(midPoint, start, end);
    vec3.scale(midPoint, midPoint, 0.5);
    buildRotation(rotation, dir, left, up, false);
    if (cap) {
      var startIndex = this._data.numVerts();
      this._data.addVertex(start, [-dir[0], -dir[1], -dir[2]], color, 0);
      capTubeStart(this._data, startIndex, 8);
    }
    var userData = options.userData !== undefined ? options.userData : null;
    console.log(userData);
    var objectId = this._nextObjectId({
      center : midPoint,
      userData : userData,
      geom : this
    });
    this._protoCyl.addTransformed(this._data, midPoint, length, radius,
                                  rotation, color, color, objectId, objectId);
    if (cap) {
      var baseIndex = this._data.numVerts();
      this._data.addVertex(end, dir, color, 0);
      capTubeEnd(this._data, baseIndex - 8, 8);
    }
    this._ready = false;
  }

  _nextObjectId(data) {
    // because we have no idea how many different objects the user will
    // create we will just allocate the object ids in chunks of
    // ID_CHUNK_SIZE
    if (!this._currentRange || !this._currentRange.hasLeft()) {
      this._currentRange = this._idPool.getContinuousRange(ID_CHUNK_SIZE);
      this._idRanges.push(this._currentRange);
    }
    return this._currentRange.nextId(data);
  }
  destroy() {
    SceneNode.prototype.destroy.call(this);
    for (var i = 0; i < this._idRanges.length; ++i) {
      this._idRanges[i].recycle();
    }
  }

  addSphere(center, radius, options) {
    options = options || {};
    var color = forceRGB(options.color || 'white');
    var userData = options.userData !== undefined ? options.userData : null;
    var objectId = this._nextObjectId({
      center : center,
      userData : userData,
      geom : this
    });
    this._protoSphere.addTransformed(this._data, center, radius,
                                     color, objectId);
    this._ready = false;
  }
  _prepareVertexArray() {
    this._ready = true;
    if (this._va !== null) {
      this._va.destroy();
    }
    this._va = new IndexedVertexArray(this._gl, this._data.numVerts(),
                                      this._data.numIndices(),
                                      this._float32Allocator,
                                      this._uint16Allocator);
    // FIXME: find a better way to do this
    this._va.setIndexData(this._data.indexData());
    this._va.setVertData(this._data.vertData());
  }

  draw(cam, shaderCatalog, style, pass) {
    if (!this._visible) {
      return;
    }
    if (!this._ready) {
      this._prepareVertexArray();
    }
    var shader = this.shaderForStyleAndPass(shaderCatalog, style, pass);
    if (!shader) {
      return;
    }
    cam.bind(shader);
    this._gl.uniform1i(shader.symId, 255);
    var va = this._va;
    va.bind(shader);
    va.draw();
    va.releaseAttribs(shader);
  }
  shaderForStyleAndPass(shaderCatalog, style, pass) {
    if (pass === 'normal') {
      if (style === 'hemilight') {
        return shaderCatalog.hemilight;
      } else {
        return shaderCatalog.phong;
      }
    }
    if (pass === 'select') {
      return shaderCatalog.select;
    }
    if (pass === 'outline') {
      return shaderCatalog.outline;
    }
    var shader = shaderCatalog[pass];
    return shader !== undefined ? shader : null;
  }
}
