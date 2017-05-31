import VertexArrayBase from './vertex-array-base';

// (unindexed) vertex array for line-based geometries
export default class VertexArray extends VertexArrayBase {
  _FLOATS_PER_VERT =9;
  _POS_OFFSET =0;
  _COLOR_OFFSET =3;
  _ID_OFFSET =7;
  _SELECT_OFFSET =8;

  constructor(gl, numVerts, float32Allocator)  {
    super(gl, numVerts, float32Allocator);

    this._numVerts = 0;
    this._primitiveType = this._gl.LINES;
  }


  numVerts() {
    return this._numVerts;
  }

  setDrawAsPoints(enable) {
    if (enable) {
      this._primitiveType = this._gl.POINTS;
    } else {
      this._primitiveType = this._gl.LINES;
    }
  }

  addPoint(pos, color, id) {
    var index = this._FLOATS_PER_VERT * this._numVerts;
    this._vertData[index++] = pos[0];
    this._vertData[index++] = pos[1];
    this._vertData[index++] = pos[2];
    this._vertData[index++] = color[0];
    this._vertData[index++] = color[1];
    this._vertData[index++] = color[2];
    this._vertData[index++] = color[3];
    this._vertData[index++] = id;
    this._vertData[index++] = 0.0;
    this._numVerts += 1;
    this._ready = false;
    this._boundingSphere = null;
  }

  addLine(startPos, startColor, endPos, endColor, idOne, idTwo) {
    this.addPoint(startPos, startColor, idOne);
    this.addPoint(endPos, endColor, idTwo);
  }

  bindAttribs(shader) {
    this._gl.vertexAttribPointer(shader.posAttrib, 3, this._gl.FLOAT, false,
                                  this._FLOATS_PER_VERT * 4,
                                  this._POS_OFFSET * 4);
    if (shader.colorAttrib !== -1) {
      this._gl.vertexAttribPointer(shader.colorAttrib, 4, this._gl.FLOAT, false,
                                  this._FLOATS_PER_VERT * 4,
                                  this._COLOR_OFFSET * 4);
      this._gl.enableVertexAttribArray(shader.colorAttrib);
    }
    this._gl.enableVertexAttribArray(shader.posAttrib);
    if (shader.objIdAttrib !== -1) {
      this._gl.vertexAttribPointer(shader.objIdAttrib, 1, this._gl.FLOAT, false,
                                   this._FLOATS_PER_VERT * 4,
                                   this._ID_OFFSET * 4);
      this._gl.enableVertexAttribArray(shader.objIdAttrib);
    }
    if (shader.selectAttrib !== -1) {
      this._gl.vertexAttribPointer(shader.selectAttrib, 1, this._gl.FLOAT,
                                   false, this._FLOATS_PER_VERT * 4,
                                   this._SELECT_OFFSET * 4);
      this._gl.enableVertexAttribArray(shader.selectAttrib);
    }
  }

  releaseAttribs(shader) {
    this._gl.disableVertexAttribArray(shader.posAttrib);
    if (shader.colorAttrib !== -1) {
      this._gl.disableVertexAttribArray(shader.colorAttrib);
    }

    if (shader.objIdAttrib !== -1) {
      this._gl.disableVertexAttribArray(shader.objIdAttrib);
    }

    if (shader.selectAttrib !== -1) {
      this._gl.disableVertexAttribArray(shader.selectAttrib);
    }
  }

  bind(shader) {
    this.bindBuffers();
    this.bindAttribs(shader);
  }

  // draws all triangles contained in the indexed vertex array using the
  // provided shader.
  draw() {
    this._gl.drawArrays(this._primitiveType, 0, this._numVerts);
  }
}
