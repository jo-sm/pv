import { MeshChainData } from './chain-data';
import BaseGeom from './base-geom';
import IndexedVertexArray from './indexed-vertex-array';

// an (indexed) mesh geometry container
// ------------------------------------------------------------------------
//
// stores the vertex data in interleaved format. not doing so has severe
// performance penalties in WebGL, and severe means orders of magnitude
// slower than using an interleaved array.
//
// the vertex data is stored in the following format;
//
// Px Py Pz Nx Ny Nz Cr Cg Cb Ca Id
//
// , where P is the position, N the normal and C the color information
// of the vertex.
//
// Uint16 index buffer limit
// -----------------------------------------------------------------------
//
// In WebGL, index arrays are restricted to uint16. The largest possible
// index value is smaller than the number of vertices required to display
// larger molecules. To work around this, MeshGeom allows to split the
// render geometry across multiple indexed vertex arrays.

export default class MeshGeom extends BaseGeom {
  constructor(gl, float32Allocator, uint16Allocator) {
    super(gl);
    this._indexedVAs = [ ];
    this._float32Allocator = float32Allocator;
    this._uint16Allocator = uint16Allocator;
    this._remainingVerts = null;
    this._remainingIndices = null;
  }

  _boundedVertArraySize(size) {
    return Math.min(65536, size);
  }

  addChainVertArray(chain, numVerts, numIndices) {
    this._remainingVerts = numVerts;
    this._remainingIndices = numIndices;
    var newVa = new MeshChainData(chain.name(), this._gl,
                                  this._boundedVertArraySize(numVerts),
                                  numIndices,
                                  this._float32Allocator,
                                  this._uint16Allocator);
    this._indexedVAs.push(newVa);
    return newVa;
  }

  addVertArray(numVerts, numIndices) {
    this._remainingVerts = numVerts;
    this._remainingIndices = numIndices;
    var newVa = new IndexedVertexArray(
      this._gl, this._boundedVertArraySize(numVerts), numIndices,
      this._float32Allocator, this._uint16Allocator);

    this._indexedVAs.push(newVa);
    return newVa;
  }

  // makes sure the current vertex array has at least space for numVerts more
  // vertices. If so, the current vertex array is returned. If not, a new
  // vertex array is created with as much space as possible:
  // - if there are still more than 2^16 vertices required for this mesh geom,
  //   a new vertex array with 2^16 vertices is returned
  // - if there are less than 2^16 vertices are required, a new vertex array
  //   with the number of remaining vertices is returned.
  //
  // Note: this depends on the total number of vertices provided to
  // addVertArray/addChainVertArray. In case there are too few vertices passed
  // to addVertArray/addChainVertArray, bad stuff will happen!
  vertArrayWithSpaceFor(numVerts) {
    var currentVa = this._indexedVAs[this._indexedVAs.length - 1];
    var remaining = currentVa.maxVerts() - currentVa.numVerts();
    if (remaining >= numVerts) {
      return currentVa;
    }
    this._remainingVerts -= currentVa.numVerts();
    this._remainingIndices -= currentVa.numIndices();
    numVerts = this._boundedVertArraySize(this._remainingVerts);
    var newVa = null;
    if (currentVa instanceof MeshChainData) {
      newVa = new MeshChainData(currentVa.chain(), this._gl, numVerts,
                                this._remainingIndices,
                                this._float32Allocator,
                                this._uint16Allocator);
    } else {
      newVa = new IndexedVertexArray(this._gl, numVerts, this._remainingIndices,
        this._float32Allocator, this._uint16Allocator);
    }
    this._indexedVAs.push(newVa);
    return newVa;
  }

  vertArray(index) {
    return this._indexedVAs[index];
  }

  destroy() {
    super.destroy();
    for (var i = 0; i < this._indexedVAs.length; ++i) {
      this._indexedVAs[i].destroy();
    }
    this._indexedVAs = [];
  }

  numVerts() {
    return this._indexedVAs[0].numVerts();
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

  _drawVertArrays(cam, shader, indexedVAs, additionalTransforms) {
    var i;
    if (additionalTransforms) {
      for (i = 0; i < indexedVAs.length; ++i) {
        indexedVAs[i].drawSymmetryRelated(cam, shader,
                                                 additionalTransforms);
      }
    } else {
      cam.bind(shader);
      this._gl.uniform1i(shader.symId, 255);
      for (i = 0; i < indexedVAs.length; ++i) {
        indexedVAs[i].bind(shader);
        indexedVAs[i].draw();
        indexedVAs[i].releaseAttribs(shader);
      }
    }
  }

  vertArrays() {
    return this._indexedVAs;
  }

  addVertex(pos, normal, color, objId) {
    var va = this._indexedVAs[0];
    va.addVertex(pos, normal, color, objId);
  }

  addTriangle(idx1, idx2, idx3) {
    var va = this._indexedVAs[0];
    va.addTriangle(idx1, idx2, idx3);
  }
}
