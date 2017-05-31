import VertexArray from './vertex-array';
import IndexedVertexArray from './indexed-vertex-array';

// LineChainData and MeshChainData are two internal classes that add molecule-
// specific attributes and functionality to the IndexedVertexArray and
// VertexArray classes.
const BaseChain = {
  chain: () => {
    return this._chain;
  },

  drawSymmetryRelated: (cam, shader, transforms) => {
    this.bind(shader);
    for (var i = 0; i < transforms.length; ++i) {
      cam.bind(shader, transforms[i]);
      this._gl.uniform1i(shader.symId, i);
      this.draw();
    }
    this.releaseAttribs(shader);
  }
};

export class LineChainData extends VertexArray {
  constructor(chain, gl, numVerts, float32Allocator) {
    super(gl, numVerts, float32Allocator);

    this._chain = chain;
  }

  chain = ::BaseChain.chain;
  drawSymmetryRelated = ::BaseChain.drawSymmetryRelated;
}

export class MeshChainData extends IndexedVertexArray {
  constructor(chain, gl, numVerts, numIndices, float32Allocator, uint16Allocator) {
    super(gl, numVerts, numIndices, float32Allocator, uint16Allocator);
  }

  chain = ::BaseChain.chain;
  drawSymmetryRelated = ::BaseChain.drawSymmetryRelated;
}
