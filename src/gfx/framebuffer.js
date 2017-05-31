export default class FrameBuffer {
  constructor(gl, options) {
    this._width = options.width;
    this._height = options.height;
    this._colorBufferWidth = this._width;
    this._colorBufferHeight = this._height;
    this._gl = gl;
    this._colorHandle = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._colorHandle);
    this._depthHandle = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, this._depthHandle);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this._width, this._height);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this._depthHandle);
    this._colorTexture = gl.createTexture();
    this._initColorBuffer();
  }

  width() {
    return this._width;
  }

  height() {
    return this._height;
  }

  bind() {
    var gl = this._gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._colorHandle);
    gl.bindRenderbuffer(gl.RENDERBUFFER, this._depthHandle);
    if (this._colorBufferWidth !== this._width ||
        this._colorBufferHeight !== this._height) {
      this._resizeBuffers();
    }
    gl.viewport(0, 0, this._width, this._height);
  }

  colorTexture() {
    return this._colorTexture;
  }

  _initColorBuffer() {
    this.bind();
    var gl = this._gl;
    gl.bindTexture(gl.TEXTURE_2D, this._colorTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this._width, this._height, 0,
                  gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
                                  gl.TEXTURE_2D, this._colorTexture, 0);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);

    this.release();
  }

  _resizeBuffers() {
    var gl = this._gl;
    gl.bindRenderbuffer(gl.RENDERBUFFER, this._depthHandle);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16,
                                this._width, this._height);
    gl.bindTexture(gl.TEXTURE_2D, this._colorTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this._width,
                        this._height, 0, gl.RGBA, gl.UNSIGNED_BYTE,
                        null);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
                                  gl.TEXTURE_2D, this._colorTexture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER,
                                      gl.DEPTH_ATTACHMENT,
                                      gl.RENDERBUFFER, this._depthHandle);
    gl.bindTexture(gl.TEXTURE_2D, null);
    this._colorBufferWidth = this._width;
    this._colorBufferHeight = this._height;
  }

  resize(width, height) {
    this._width = width;
    this._height = height;
  }

  release() {
    var gl = this._gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
  }
}
