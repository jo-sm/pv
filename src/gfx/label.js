import SceneNode from './scene-node';

function smallestPowerOfTwo(size) {
  var s = 1;
  while (s < size) {
    s *= 2;
  }
  return s;
}

export default class TextLabel extends SceneNode {
  constructor(gl, canvas, context, pos, text, options) {
    super(gl);

    var opts = options || {};
    this._options = {};
    this._options.fillStyle = opts.fillStyle || '#000';
    this._options.backgroundAlpha = opts.backgroundAlpha || 0.0;
    this._options.fontSize = opts.fontSize || 24;
    this._options.font = opts.font || 'Verdana';
    this._options.fontStyle = opts.fontStyle || 'normal';
    this._options.fontColor = opts.fontColor || '#000';
    this._order = 100;
    this._pos = pos;
    this._interleavedBuffer = this._gl.createBuffer();
    this._interleavedData = new Float32Array(5 * 6);

    this._prepareText(canvas, context, text);

    var halfWidth = 0.5;
    var halfHeight = 0.5;
    this._interleavedData[0] = pos[0];
    this._interleavedData[1] = pos[1];
    this._interleavedData[2] = pos[2];
    this._interleavedData[3] = -halfWidth;
    this._interleavedData[4] = -halfHeight;

    this._interleavedData[5] = pos[0];
    this._interleavedData[6] = pos[1];
    this._interleavedData[7] = pos[2];
    this._interleavedData[8] = halfWidth;
    this._interleavedData[9] = halfHeight;

    this._interleavedData[10] = pos[0];
    this._interleavedData[11] = pos[1];
    this._interleavedData[12] = pos[2];
    this._interleavedData[13] = halfWidth;
    this._interleavedData[14] = -halfHeight;

    this._interleavedData[15] = pos[0];
    this._interleavedData[16] = pos[1];
    this._interleavedData[17] = pos[2];
    this._interleavedData[18] = -halfWidth;
    this._interleavedData[19] = -halfHeight;

    this._interleavedData[20] = pos[0];
    this._interleavedData[21] = pos[1];
    this._interleavedData[22] = pos[2];
    this._interleavedData[23] = -halfWidth;
    this._interleavedData[24] = halfHeight;

    this._interleavedData[25] = pos[0];
    this._interleavedData[26] = pos[1];
    this._interleavedData[27] = pos[2];
    this._interleavedData[28] = halfWidth;
    this._interleavedData[29] = halfHeight;
  }

  updateProjectionIntervals() {
    // text labels don't affect the projection interval. Don't do anything.
  }

  updateSquaredSphereRadius(center, radius) {
    // text labels don't affect the bounding spheres.
    return radius;
  }

  _setupTextParameters(ctx) {
    ctx.fillStyle = this._options.fontColor;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.font = `${this._options.fontStyle} ${this._options.fontSize} px ${this._options.font}`;
  }

  _prepareText(canvas, ctx, text) {
    this._setupTextParameters(ctx);
    var estimatedWidth = ctx.measureText(text).width;
    var estimatedHeight = this._options.fontSize;
    canvas.width = smallestPowerOfTwo(estimatedWidth);
    canvas.height = smallestPowerOfTwo(estimatedHeight);
    ctx.fillStyle = this._options.fillStyle;
    ctx.globalAlpha = this._options.backgroundAlpha;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this._setupTextParameters(ctx);
    ctx.globalAlpha = 1.0;
    ctx.lineWidth = 0.5;
    ctx.lineStyle = 'none';
    ctx.fillText(text, 0, canvas.height);
    ctx.strokeText(text, 0, canvas.height);
    /*
    // use the following code for testing purposes. for optimal visual
    // results, the pixels of the canvas must match one to one to pixels
    // in the 3D scene.
    ctx.fillStyle='black';
    for (var i = 0; i < canvas.width; i+=2) {
      for (var j = 0; j < canvas.height; j+=2) {
        ctx.fillRect(i + j%2, j, 1, 1);
      }
    }
    */
    this._texture = this._gl.createTexture();
    this._textureFromCanvas(this._texture, canvas);
    // these two variables give us the use portion of the canvas.
    this._xScale = estimatedWidth / canvas.width;
    this._yScale = estimatedHeight / canvas.height;
    this._width = estimatedWidth;
    this._height = estimatedHeight;
  }

  _textureFromCanvas(targetTexture, srcCanvas) {
    var gl = this._gl;
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.bindTexture(gl.TEXTURE_2D, targetTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,
                  gl.UNSIGNED_BYTE, srcCanvas);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.bindTexture(gl.TEXTURE_2D, null);
  }

  bind() {
    var gl = this._gl;
    gl.bindBuffer(gl.ARRAY_BUFFER, this._interleavedBuffer);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this._texture);
    if (this._ready) {
      return;
    }
    gl.bufferData(gl.ARRAY_BUFFER, this._interleavedData, gl.STATIC_DRAW);
    this._ready = true;
  }

  draw(cam, shaderCatalog, style, pass) {
    if (!this._visible) {
      return;
    }

    if (pass !== 'normal') {
      return;
    }
    var shader = shaderCatalog.text;
    cam.bind(shader);
    this.bind();
    var gl = this._gl;
    var factor = cam.upsamplingFactor();
    gl.uniform1f(gl.getUniformLocation(shader, 'xScale'), this._xScale);
    gl.uniform1f(gl.getUniformLocation(shader, 'yScale'), this._yScale);
    gl.uniform1f(gl.getUniformLocation(shader, 'width'), factor * 2.0*this._width/cam.viewportWidth());
    gl.uniform1f(gl.getUniformLocation(shader, 'height'), factor * 2.0*this._height/cam.viewportHeight());
    gl.uniform1i(gl.getUniformLocation(shader, 'sampler'), 0);
    var vertAttrib = gl.getAttribLocation(shader, 'attrCenter');
    gl.enableVertexAttribArray(vertAttrib);
    gl.vertexAttribPointer(vertAttrib, 3, gl.FLOAT, false, 5 * 4, 0 * 4);
    var texAttrib = gl.getAttribLocation(shader, 'attrCorner');
    gl.vertexAttribPointer(texAttrib, 2, gl.FLOAT, false, 5 * 4, 3 * 4);
    gl.enableVertexAttribArray(texAttrib);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.disableVertexAttribArray(vertAttrib);
    gl.disableVertexAttribArray(texAttrib);
    gl.disable(gl.BLEND);
  }
}
