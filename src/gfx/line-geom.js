import { LineChainData } from './chain-data';

// Holds geometrical data for objects rendered as lines. For each vertex,
// the color and position is stored in an interleaved format.
export default class LineGeom extends LineChainData {
  constructor(gl, float32Allocator) {
    super(gl);

    this._vertArrays = [];
    this._float32Allocator = float32Allocator;
    this._lineWidth = 0.5;
    this._pointSize = 1.0;
  }

  addChainVertArray(chain, numVerts) {
    var va = new LineChainData(chain.name(), this._gl, numVerts,
                              this._float32Allocator);
    this._vertArrays.push(va);
    return va;
  }

  setLineWidth(width) {
    this._lineWidth = width;
  }

  setPointSize(size) {
    this._pointSize = size;
  }

  vertArrays() {
    return this._vertArrays;
  }

  shaderForStyleAndPass(shaderCatalog, style, pass) {
    if (pass === 'outline') {
      return shaderCatalog.selectLines;
    }
    if (pass === 'select') {
      return shaderCatalog.select;
    }
    return shaderCatalog.lines;
  }

  destroy() {
    super.destroy();
    for (var i = 0; i < this._vertArrays.length; ++i) {
      this._vertArrays[i].destroy();
    }
    this._vertArrays = [];
  }

  _drawVertArrays(cam, shader, vertArrays, additionalTransforms) {
    var pointSizeMul = cam.upsamplingFactor();
    if (shader.selectAttrib !== -1) {
      pointSizeMul = 4.0 * cam.upsamplingFactor();
    }
    var i;
    if (additionalTransforms) {
      cam.bind(shader);
      this._gl.lineWidth(pointSizeMul * this._lineWidth);
      if (shader.pointSize) {
        this._gl.uniform1f(shader.pointSize,
                          pointSizeMul * this._pointSize);
      }
      for (i = 0; i < vertArrays.length; ++i) {
        vertArrays[i].drawSymmetryRelated(cam, shader, additionalTransforms);
      }
    } else {
      cam.bind(shader);
      this._gl.lineWidth(pointSizeMul * this._lineWidth);
      this._gl.uniform1i(shader.symId, 255);
      if (shader.pointSize) {
        this._gl.uniform1f(shader.pointSize,
                          pointSizeMul * this._pointSize);
      }
      for (i = 0; i < vertArrays.length; ++i) {
        vertArrays[i].bind(shader);
        vertArrays[i].draw();
        vertArrays[i].releaseAttribs(shader);
      }
    }
  }

  vertArray() {
    return this._va;
  }
}

