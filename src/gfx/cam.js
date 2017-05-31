import { vec3, vec4, mat4 } from '@mapbox/gl-matrix';

function floatArraysAreEqual(lhs, rhs) {
  if (lhs.length !== rhs.length) {
    return false;
  }
  for (var i = 0; i < lhs.length; ++i) {
    if (Math.abs(lhs[i] - rhs[i]) > 0.000001) {
      return false;
    }
  }
  return true;
}

// A camera, providing us with a view into the 3D worlds. Handles projection,
// and modelview matrices and controls the global render parameters such as
// shader and fog.
export default class Cam {
  constructor(gl) {
    this._projection = mat4.create();
    this._camModelView = mat4.create();
    this._modelView = mat4.create();
    this._rotation = mat4.create();
    this._translation = mat4.create();
    this._near = 0.10;
    this._onCameraChangedListeners = [];
    this._far = 4000.0;
    this._fogNear = -5;
    this._fogFar = 50;
    this._fog = true;
    this._fovY = Math.PI * 45.0 / 180.0;
    this._fogColor = vec3.fromValues(1, 1, 1);
    this._outlineColor = vec3.fromValues(0.1, 0.1, 0.1);
    this._outlineWidth = 1.0;
    this._outlineEnabled = true;
    this._selectionColor = vec4.fromValues(0.1, 1.0, 0.1, 0.7);
    this._center = vec3.create();
    this._zoom = 50;
    this._screenDoorTransparency = false;
    this._updateProjectionMat = true;
    this._updateModelViewMat = true;
    this._upsamplingFactor = 1;
    this._gl = gl;
    this._currentShader = null;
    this._stateId = 0;
    this.setViewportSize(gl.viewportWidth, gl.viewportHeight);
  }

  _incrementStateId() {
    this._stateId += 1;
    if (this._stateId > 0xfffffffff) {
      this._stateId = 0;
    }
  }

  setOutlineEnabled(value) {
    this._outlineEnabled = value;
    this._incrementStateId();
  }

  setScreenDoorTransparency(value) {
    this._screenDoorTransparency = value;
    this._incrementStateId();
  }

  setOutlineWidth(value) {
    if (this._outlineWidth !== value) {
      this._outlineWidth = value;
      this._incrementStateId();
    }
  }

  addOnCameraChanged(fn) {
    this._onCameraChangedListeners.push(fn);
  }

  _informOnCameraChangedListeners() {
    var cam = this;
    this._onCameraChangedListeners.forEach(function(fn) {
      fn(cam);
    });
  }

  setRotation(rot) {
    var update = false;
    if (rot.length === 16) {
      if (!floatArraysAreEqual(this._rotation, rot)) {
        mat4.copy(this._rotation, rot);
        update = true;
      }
    } else {
      mat4.fromMat3(this._rotation, rot);
      update = true;
    }
    if (update) {
      this._informOnCameraChangedListeners();
      this._updateModelViewMat = true;
    }
  }

  upsamplingFactor() {
    return this._upsamplingFactor;
  }

  setUpsamplingFactor(val) {
    if (this._upsamplingFactor !== val) {
      this._incrementStateId();
      this._upsamplingFactor = val;
      var x = this._upsamplingFactor/this._width;
      var y = this._upsamplingFactor/this._height;
      this._relativePixelSize = new Float32Array([x, y]);
    }
  }

  // returns the 3 main axes of the current camera rotation
  mainAxes() {
    return[
      vec3.fromValues(this._rotation[0], this._rotation[4], this._rotation[8]),
      vec3.fromValues(this._rotation[1], this._rotation[5], this._rotation[9]),
      vec3.fromValues(this._rotation[2], this._rotation[6], this._rotation[10])
    ];
  }

  fieldOfViewY() {
    return this._fovY;
  }

  setFieldOfViewY(value) {
    this._fovY = value;
    this._updateProjectionMat = true;
  }

  aspectRatio() {
    return this._width / this._height;
  }

  rotation() {
    return this._rotation;
  }

  _updateIfRequired() {
    var updated = false;
    if (this._updateModelViewMat) {
      mat4.identity(this._camModelView);
      mat4.translate(this._camModelView, this._camModelView, [-this._center[0], -this._center[1], -this._center[2]]);
      mat4.mul(this._camModelView, this._rotation, this._camModelView);
      mat4.identity(this._translation);
      mat4.translate(this._translation, this._translation, [0, 0, -this._zoom]);
      mat4.mul(this._camModelView, this._translation, this._camModelView);
      updated = true;
    }
    if (this._updateProjectionMat) {
      mat4.identity(this._projection);
      mat4.perspective(this._projection, this._fovY, this._width / this._height,
                       this._near, this._far);
      updated = true;
    }
    this._updateProjectionMat = false;
    this._updateModelViewMat = false;
    if (updated) {
      this._incrementStateId();
    }
    return updated;
  }

  setViewportSize(width, height) {
    this._updateProjectionMat = true;
    this._width = width;
    this._height = height;
    this._relativePixelSize = new Float32Array([this._upsamplingFactor/width, this._upsamplingFactor/height]);
  }

  viewportWidth() {
    return this._width;
  }

  viewportHeight() {
    return this._height;
  }


  setCenter(point) {
    if (!floatArraysAreEqual(this._center, point)) {
      this._updateModelViewMat = true;
      vec3.copy(this._center, point);
      this._informOnCameraChangedListeners();
    }
  }

  fog(value) {
    if (value !== undefined && value !== this._fog) {
      this._fog = value;
      this._incrementStateId();
    }
    return this._fog;
  }

  rotateZ(delta) {
    var tm = mat4.create();
    mat4.identity(tm);
    this._updateModelViewMat = true;
    mat4.rotate(tm, tm, delta, [ 0, 0, 1 ]);
    mat4.mul(this._rotation, tm, this._rotation);
    this._informOnCameraChangedListeners();
  }

  rotateX(delta) {
    var tm = mat4.create();
    mat4.identity(tm);
    this._updateModelViewMat = true;
    mat4.rotate(tm, tm, delta, [ 1, 0, 0 ]);
    mat4.mul(this._rotation, tm, this._rotation);
    this._informOnCameraChangedListeners();
  }

  rotateY(delta) {
    var tm = mat4.create();
    mat4.identity(tm);
    this._updateModelViewMat = true;
    mat4.rotate(tm, tm, delta, [ 0, 1, 0 ]);
    mat4.mul(this._rotation, tm, this._rotation);
    this._informOnCameraChangedListeners();
  }

  panX(delta) {
    return this.panXY(delta, 0);
  }

  panY(delta) {
    return this.panXY(0, delta);
  }

  panXY(deltaX, deltaY) {
    var invertRotation = mat4.create();
    var newCenter = vec3.create();
    mat4.transpose(invertRotation, this._rotation);
    this._updateModelViewMat = true;
    vec3.set(newCenter, -deltaX, deltaY, 0);
    vec3.transformMat4(newCenter, newCenter, invertRotation);
    vec3.add(newCenter, newCenter, this._center);
    this.setCenter(newCenter);
  }

  nearOffset() {
    return this._near;
  }

  farOffset() {
    return this._far;
  }

  setNearFar(near, far) {
    if (near === this._near && far === this._far) {
      return;
    }
    this._near = near;
    this._far = far;
    this._updateProjectionMat = true;
  }

  setFogNearFar(near, far) {
    this._fogNear = near;
    this._fogFar = far;
    this._updateProjectionMat = true;
  }

  setZoom(zoom) {
    if (Math.abs(this._zoom - zoom) > 0.00000001) {
      this._updateModelViewMat = true;
      this._zoom = zoom;
    }
    return this._zoom;
  }

  zoom(delta) {
    if (delta === undefined) {
      return this._zoom;
    }
    this._updateModelViewMat = true;
    var factor = 1.0 + delta * 0.1;
    this._zoom = Math.min(1000.0, Math.max(2.0, factor * this._zoom));
    this._informOnCameraChangedListeners();
    return this._zoom;
  }

  center() {
    return this._center;
  }

  setFogColor(color) {
    this._fogColor = vec3.clone(color);
  }

  currentShader() {
    return this._currentShader;
  }

  invalidateCurrentShader() {
    this._currentShader = null;
  }

  setOutlineColor(color) {
    this._outlineColor = vec3.clone(color);
  }

  setSelectionColor(color) {
    this._selectionColor = vec3.clone(color);
    if (color.length === 3) {
      this._selectionColor = vec4.fromValues(color[0], color[1], color[2], 0.7);
    } else {
      this._selectionColor = vec4.clone(color);
    }
    this._incrementStateId();
  }

  // sets all OpenGL parameters to make this camera active.
  //
  // among other things, it sets the follow uniforms on the shader:
  //
  // - projectionMat   - the 4x4 projection matrix
  // - modelviewMat    - the 4x4 modelview matrix
  // - rotationMat     - the rotational part of the modelview matrix
  // - fog             - boolean indicating whether fog is enabled
  // - fogNear,fogFar  - near and far offset of fog
  // - fogColor        - the color of fog
  // - outlineColor    - color to be used for the outline shader
  bind(shader, additionalTransform) {
    var shaderChanged = false;
    var gl = this._gl;
    if (this._currentShader !== shader) {
      this._currentShader = shader;
      gl.useProgram(shader);
      shaderChanged = true;
    }
    shaderChanged = this._updateIfRequired() || shaderChanged;

    // in case additionalTransform is given, multiply camera model view
    // with the matrix and use the product as the model view matrix.
    if (additionalTransform) {
      mat4.mul(this._modelView, this._camModelView, additionalTransform);
      gl.uniformMatrix4fv(shader.modelview, false, this._modelView);
    } else {
      gl.uniformMatrix4fv(shader.modelview, false, this._camModelView);
    }

    // in case nothing changed, there is no need for us to set any other
    // parameters.
    if (this._stateId === shader.stateId) {
      return;
    }
    shader.stateId = this._stateId;
    gl.uniformMatrix4fv(shader.projection, false, this._projection);
    if (shader.rotation) {
      gl.uniformMatrix4fv(shader.rotation, false, this._rotation);
    }
    gl.uniform1i(shader.fog, this._fog);
    var nearOffset =   this._zoom;
    gl.uniform1f(shader.fogFar, this._fogFar + nearOffset);
    gl.uniform1f(shader.zoom, this._zoom);
    gl.uniform1f(shader.fogNear, this._fogNear + nearOffset);
    gl.uniform3fv(shader.fogColor, this._fogColor);
    gl.uniform3fv(shader.outlineColor, this._outlineColor);
    gl.uniform4fv(shader.selectionColor, this._selectionColor);
    gl.uniform2fv(shader.relativePixelSize, this._relativePixelSize);
    gl.uniform1f(shader.outlineWidth, this._outlineWidth);
    gl.uniform1i(shader.screenDoorTransparency, this._screenDoorTransparency);
    gl.uniform1i(shader.outlineEnabled, this._outlineEnabled);
  }
}
