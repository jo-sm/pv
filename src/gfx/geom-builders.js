import { vec3 } from '@mapbox/gl-matrix';
import { catmullRomSpline } from '../geom';

export class ProtoSphere {
  constructor(stacks, arcs) {
    this._arcs = arcs;
    this._stacks = stacks;
    this._indices = new Uint16Array(3 * arcs * stacks * 2);
    this._verts = new Float32Array(3 * arcs * stacks);
    var vert_angle = Math.PI / (stacks - 1);
    var horz_angle = Math.PI * 2.0 / arcs;
    var i;
    var j;
    for (i = 0; i < this._stacks; ++i) {
      var radius = Math.sin(i * vert_angle);
      var z = Math.cos(i * vert_angle);
      for (j = 0; j < this._arcs; ++j) {
        var nx = radius * Math.cos(j * horz_angle);
        var ny = radius * Math.sin(j * horz_angle);
        this._verts[3 * (j + i * this._arcs)] = nx;
        this._verts[3 * (j + i * this._arcs) + 1] = ny;
        this._verts[3 * (j + i * this._arcs) + 2] = z;
      }
    }
    var index = 0;
    for (i = 0; i < this._stacks - 1; ++i) {
      for (j = 0; j < this._arcs; ++j) {
        this._indices[index] = (i) * this._arcs + j;
        this._indices[index + 1] = (i) * this._arcs + ((j + 1) % this._arcs);
        this._indices[index + 2] = (i + 1) * this._arcs + j;

        index += 3;

        this._indices[index] = (i) * this._arcs + ((j + 1) % this._arcs);
        this._indices[index + 1] =
            (i + 1) * this._arcs + ((j + 1) % this._arcs);
        this._indices[index + 2] = (i + 1) * this._arcs + j;
        index += 3;
      }
    }
  }

  addTransformed(va, center, radius, color, objId) {
    var pos = vec3.create();
    var normal = vec3.create();
    var baseIndex = va.numVerts();
    for (var i = 0; i < this._stacks * this._arcs; ++i) {
      vec3.set(normal, this._verts[3 * i], this._verts[3 * i + 1],
              this._verts[3 * i + 2]);
      vec3.copy(pos, normal);
      vec3.scale(pos, pos, radius);
      vec3.add(pos, pos, center);
      va.addVertex(pos, normal, color, objId);
    }
    for (i = 0; i < this._indices.length / 3; ++i) {
      va.addTriangle(baseIndex + this._indices[i * 3],
                     baseIndex + this._indices[i * 3 + 1],
                     baseIndex + this._indices[i * 3 + 2]);
    }
  }

  numIndices() {
    return this._indices.length;
  }

  numVerts() {
    return this._verts.length / 3;
  }
}

// A tube profile is a cross-section of a tube, e.g. a circle or a 'flat'
// square.
// They are used to control the style of helices, strands and coils for the
// cartoon render mode.
export class TubeProfile {
  constructor(points, num, strength) {
    var interpolated = catmullRomSpline(points, points.length / 3, num, strength, true);

    this._indices = new Uint16Array(interpolated.length * 2);
    this._verts = interpolated;
    this._normals = new Float32Array(interpolated.length);
    this._arcs = interpolated.length / 3;

    var normal = vec3.create();

    for (var i = 0; i < this._arcs; ++i) {
      var i_prev = i === 0 ? this._arcs - 1 : i - 1;
      var i_next = i === this._arcs - 1 ? 0 : i + 1;
      normal[0] = this._verts[3 * i_next + 1] - this._verts[3 * i_prev + 1];
      normal[1] = this._verts[3 * i_prev] - this._verts[3 * i_next];
      vec3.normalize(normal, normal);
      this._normals[3 * i] = normal[0];
      this._normals[3 * i + 1] = normal[1];
      this._normals[3 * i + 2] = normal[2];
    }

    for (i = 0; i < this._arcs; ++i) {
      this._indices[6 * i] = i;
      this._indices[6 * i + 1] = i + this._arcs;
      this._indices[6 * i + 2] = ((i + 1) % this._arcs) + this._arcs;
      this._indices[6 * i + 3] = i;
      this._indices[6 * i + 4] = ((i + 1) % this._arcs) + this._arcs;
      this._indices[6 * i + 5] = (i + 1) % this._arcs;
    }
  }

  addTransformed(vertArray, center, radius, rotation, color, first, offset, objId) {
    var pos = vec3.create();
    var normal = vec3.create();
    var arcs = this._arcs;
    var norms = this._normals;
    var verts = this._verts;
    var baseIndex = vertArray.numVerts() - arcs;
    for (var i = 0; i < arcs; ++i) {
      vec3.set(pos, radius * verts[3 * i], radius * verts[3 * i + 1], 0.0);
      vec3.transformMat3(pos, pos, rotation);
      vec3.add(pos, pos, center);
      vec3.set(normal, norms[3 * i], norms[3 * i + 1], 0.0);
      vec3.transformMat3(normal, normal, rotation);
      vertArray.addVertex(pos, normal, color, objId);
    }
    if (first) {
      return;
    }
    if (offset === 0) {
      // that's what happens most of the time, thus is has been optimized.
      for (i = 0; i < this._indices.length / 3; ++i) {
        vertArray.addTriangle(baseIndex + this._indices[i * 3],
                              baseIndex + this._indices[i * 3 + 1],
                              baseIndex + this._indices[i * 3 + 2]);
      }
      return;
    }
    for (i = 0; i < arcs; ++i) {
      vertArray.addTriangle(baseIndex + ((i + offset) % arcs),
                            baseIndex + i + arcs,
                            baseIndex + ((i + 1) % arcs) + arcs);
      vertArray.addTriangle(baseIndex + (i + offset) % arcs,
                            baseIndex + ((i + 1) % arcs) + arcs,
                            baseIndex + ((i + 1 + offset) % arcs));
    }

  }
}

export class ProtoCylinder {
  constructor(arcs) {
    this._arcs = arcs;
    this._indices = new Uint16Array(arcs * 3 * 2);
    this._verts = new Float32Array(3 * arcs * 2);
    this._normals = new Float32Array(3 * arcs * 2);
    var angle = Math.PI * 2 / this._arcs;
    for (var i = 0; i < this._arcs; ++i) {
      var cos_angle = Math.cos(angle * i);
      var sin_angle = Math.sin(angle * i);
      this._verts[3 * i] = cos_angle;
      this._verts[3 * i + 1] = sin_angle;
      this._verts[3 * i + 2] = -0.5;
      this._verts[3 * arcs + 3 * i] = cos_angle;
      this._verts[3 * arcs + 3 * i + 1] = sin_angle;
      this._verts[3 * arcs + 3 * i + 2] = 0.5;
      this._normals[3 * i] = cos_angle;
      this._normals[3 * i + 1] = sin_angle;
      this._normals[3 * arcs + 3 * i] = cos_angle;
      this._normals[3 * arcs + 3 * i + 1] = sin_angle;
    }
    for (i = 0; i < this._arcs; ++i) {
      this._indices[6 * i] = (i) % this._arcs;
      this._indices[6 * i + 1] = arcs + ((i + 1) % this._arcs);
      this._indices[6 * i + 2] = (i + 1) % this._arcs;

      this._indices[6 * i + 3] = (i) % this._arcs;
      this._indices[6 * i + 4] = arcs + ((i) % this._arcs);
      this._indices[6 * i + 5] = arcs + ((i + 1) % this._arcs);
    }
  }

  numVerts() {
    return this._verts.length / 3;
  }

  numIndices() {
    return this._indices.length;
  }

  addTransformed(va, center, length, radius, rotation, colorOne, colorTwo, idOne, idTwo) {
    var pos = vec3.create();
    var normal = vec3.create();
    var baseIndex = va.numVerts();
    var verts = this._verts;
    var norms = this._normals;
    var arcs = this._arcs;
    for (var i = 0; i < 2 * arcs; ++i) {
      vec3.set(pos, radius * verts[3 * i], radius * verts[3 * i + 1],
              length * verts[3 * i + 2]);
      vec3.transformMat3(pos, pos, rotation);
      vec3.add(pos, pos, center);
      vec3.set(normal, norms[3 * i], norms[3 * i + 1], norms[3 * i + 2]);
      vec3.transformMat3(normal, normal, rotation);
      var objId = i < arcs ? idOne : idTwo;
      va.addVertex(pos, normal, i < arcs ? colorOne : colorTwo, objId);
    }
    var indices = this._indices;
    for (i = 0; i < indices.length / 3; ++i) {
      va.addTriangle(baseIndex + indices[i * 3],
                     baseIndex + indices[i * 3 + 1],
                     baseIndex + indices[i * 3 + 2]);
    }
  }
}
