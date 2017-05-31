import { vec3, mat3, mat4 } from '@mapbox/gl-matrix';
import { FixedSlab, AutoSlab } from './slab';
import UniqueObjectIdPool from './unique-object-id-pool';
import FrameBuffer from './gfx/framebuffer';
import PoolAllocator from './buffer-allocators';
import { forceRGB, uniform, byElement, bySS } from './color';
import Cam from './gfx/cam';
import TouchHandler from './touch';
import MouseHandler from './mouse';
import { Canvas, isWebGLSupported } from './gfx/canvas';
import CustomMesh from './gfx/custom-mesh';
import TextLabel from './gfx/label';
import { axisRotation } from './geom';
import { lineTrace, billboardedSpheres, spheres, sline, cartoon, surface, ballsAndSticks, lines, points, trace } from './gfx/render';
import { HEMILIGHT_VS, PRELUDE_FS, HEMILIGHT_FS, PHONG_FS, OUTLINE_VS, OUTLINE_FS, LINES_VS, LINES_FS, TEXT_VS, TEXT_FS, SELECT_LINES_VS, SELECT_LINES_FS, SELECT_VS, SELECT_FS, SPHERES_VS, SPHERES_FS, SELECT_SPHERES_VS, SELECT_SPHERES_FS } from './gfx/shaders';
import { AnimationControl, move, rotate, zoom, rockAndRoll, spin } from './gfx/animation';
import { Range } from './utils';
import SceneNode from './gfx/scene-node';

export {
  isWebGLSupported
};

var WEBGL_NOT_SUPPORTED = `<div style="vertical-align:middle; text-align:center;">
<h1>WebGL not supported</h1><p>Your browser does not support WebGL.
You might want to try Chrome, Firefox, IE 11, or newer versions of Safari
</p>
<p>If you are using a recent version of one of the above browsers, your
graphic card might be blocked. Check the browser documentation for details
on how to unblock it.
</p>
</div>`;

function isiOS() {
  return (/(iPad|iPhone|iPod)/g).test(navigator.userAgent);
}

function isAndroid() {
  return (/Android/ig).test(navigator.userAgent);
}

function shouldUseHighPrecision(gl) {
  // high precision for shaders is only required on iOS, all the other browsers
  // are doing just fine with mediump.
  const highp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
  const highpSupported = Boolean(highp.precision);

  return highpSupported && (isiOS() || isAndroid());
}

function slabModeToStrategy(mode, options) {
  mode = mode || 'auto';
  if (mode === 'fixed') {
    return new FixedSlab(options);
  }

  if (mode === 'auto') {
    return new AutoSlab(options);
  }

  return null;
}

class PickedObject {
  constructor(target, node, symIndex, pos, object, transform, connectivity) {
    this._pos = pos;
    this._target = target;
    this._node = node;
    this._symIndex = symIndex;
    this._legacyObject = object;
    this._legacyTransform = transform;
    this._connectivity = connectivity;
  }

  symIndex() {
    return this._symIndex;
  }

  target() {
    return this._target;
  }

  pos() {
    return this._pos;
  }

  connectivity() {
    return this._connectivity;
  }

  node() {
    return this._node;
  }
}

export class Viewer {
  static RENDER_MODES = [
    'sline',
    'lines',
    'trace',
    'lineTrace',
    'cartoon',
    'tube',
    'spheres',
    'ballsAndSticks',
    'points'
  ];

  constructor(domElement, opts) {
    this._options = this._initOptions(opts, domElement);

    this._initialized = false;
    this._objects = [];
    this._domElement = domElement;
    this._redrawRequested = false;
    this._resize = false;
    this._lastTimestamp = null;
    this._objectIdManager = new UniqueObjectIdPool();
    // these two are set to the animation objects when spin/rockAndRoll
    // are active
    this._spin = null;
    this._rockAndRoll = null;

    this.listenerMap = { };

    this._animControl = new AnimationControl();
    this._initKeyboardInput();

    // NOTE: make sure to only request features supported by all browsers,
    // not only browsers that support WebGL in this constructor. WebGL
    // detection only happens in Viewer._initGL. Once this happened, we are
    // save to use whatever feature pleases us, e.g. typed arrays, 2D
    // contexts etc.
    this._initCanvas();

    this.quality(this._options.quality);

    if (this._options.click !== null) {
      this.on('click', this._options.click);
    }
    if (this._options.doubleClick !== null) {
      this.on('doubleClick', this._options.doubleClick);
    }

    const readyStates = [ 'complete', 'loaded', 'interactive' ];

    if (readyStates.indexOf(document.readyState) !== -1) {
      this._initViewer();
    } else {
      document.addEventListener('DOMContentLoaded', ::this._initViewer);
    }
  }

  _initOptions(opts, domElement) {
    opts = opts || {};
    this._extensions = opts.extensions || [];
    this._extensions.forEach(function(ext) {
      if (ext.optionOverrides !== null) {
        Object.assign(opts, ext.optionOverrides());
      }
    });

    var options = {
      width : (opts.width || 500),
      height : (opts.height || 500),
      animateTime : (opts.animateTime || 0),
      antialias : opts.antialias,
      forceManualAntialiasing: optValue(opts, 'forceManualAntialiasing', true),
      quality : optValue(opts, 'quality', 'low'),
      style : optValue(opts, 'style', 'hemilight'),
      background : forceRGB(opts.background || 'white'),
      slabMode : slabModeToStrategy(opts.slabMode),
      outline : optValue(opts, 'outline', true),
      outlineColor : forceRGB(optValue(opts, 'outlineColor', 'black')),
      outlineWidth: optValue(opts, 'outlineWidth', 1.5),
      selectionColor : forceRGB(optValue(opts, 'selectionColor', '#3f3'),
                                      0.7),
      fov : optValue(opts, 'fov', 45.0),
      doubleClick : opts.doubleClick || 'center',
      click : opts.click,
      fog : optValue(opts, 'fog', true),
      transparency : optValue(opts, 'transparency', 'alpha'),
    };
    var parentRect = domElement.getBoundingClientRect();
    if (options.width === 'auto') {
      options.width = parentRect.width;
    }
    if (options.height === 'auto') {
      options.height = parentRect.height;
    }
    return options;
  }

  // with rendering to avoid flickering.
  _ensureSize() {
    if (!this._resize) {
      return;
    }
    this._resize = false;
    this._cam.setViewportSize(this._canvas.viewportWidth(),
                              this._canvas.viewportHeight());
    this._pickBuffer.resize(this._options.width, this._options.height);
  }

  resize(width, height) {
    if (width === this._options.width && height === this._options.height) {
      return;
    }
    this._canvas.resize(width, height);
    this._resize = true;
    this._options.width = width;
    this._options.height = height;
    this.requestRedraw();
  }

  fitParent() {
    var parentRect = this._domElement.getBoundingClientRect();
    this.resize(parentRect.width, parentRect.height);
  }

  gl() {
    return this._canvas.gl();
  }

  ok() {
    return this._initialized;
  }

  options(optName, value) {
    if (value !== undefined) {
      this._options[optName] = value;
      if (optName === 'fog') {
        this._cam.fog(value);
        this.requestRedraw();
      } else if (optName === 'fov') {
        this._cam.setFieldOfViewY(value * Math.PI / 180.0);
      } else if (optName === 'selectionColor') {
        this._cam.setSelectionColor(forceRGB(value, 0.7));
      } else if (optName === 'outlineColor') {
        this._cam.setOutlineColorColor(forceRGB(value));
      } else if (optName === 'outlineWidth') {
        this._cam.setOutlineWidth(value + 0.0 /* force to float*/);
      } else if (optName === 'transparency') {
        var sd = value === 'screendoor';
        this._cam.setScreenDoorTransparency(sd);
      }
    }
    return this._options[optName];
  }

  quality(qual) {
    if (qual === undefined) {
      return this._options.quality;
    }
    this._options.quality = qual;
    if (qual === 'high') {
      this._options.arcDetail = 4;
      this._options.sphereDetail = 16;
      this._options.splineDetail = 8;
    }
    if (qual === 'medium') {
      this._options.arcDetail = 2;
      this._options.sphereDetail = 10;
      this._options.splineDetail = 5;
    }
    if (qual === 'low') {
      this._options.arcDetail = 2;
      this._options.sphereDetail = 8;
      this._options.splineDetail = 3;
    }
    return this._options.quality;
  }

  // returns the content of the WebGL context as a data URL element which can be
  // inserted into an img element. This allows users to save a picture to disk
  imageData() {
    return this._canvas.imageData();
  }

  _initPickBuffer() {
    var fbOptions = {
      width : this._options.width, height : this._options.height
    };
    this._pickBuffer = new FrameBuffer(this._canvas.gl(), fbOptions);
  }

  _initViewer() {
    if (!this._canvas.initGL()) {
      this._domElement.removeChild(this._canvas.domElement());
      this._domElement.innerHTML = WEBGL_NOT_SUPPORTED;
      this._domElement.style.width = this._options.width + 'px';
      this._domElement.style.height = this._options.height + 'px';
      return false;
    }

    this._initPickBuffer();
    this._2dcontext = this._textureCanvas.getContext('2d');
    this._float32Allocator = new PoolAllocator(Float32Array);
    this._uint16Allocator = new PoolAllocator(Uint16Array);
    this._cam = new Cam(this._canvas.gl());
    this._cam.setUpsamplingFactor(this._canvas.superSamplingFactor());
    this._cam.setOutlineWidth(this._options.outlineWidth);
    this._cam.setOutlineEnabled(this._options.outline);
    var sd = this._options.transparency === 'screendoor';
    this._cam.setScreenDoorTransparency(sd);
    this._cam.fog(this._options.fog);
    this._cam.setFogColor(this._options.background);
    this._cam.setOutlineColor(this._options.outlineColor);
    this._cam.setSelectionColor(this._options.selectionColor);
    this._cam.setFieldOfViewY(this._options.fov * Math.PI / 180.0);
    this._mouseHandler.setCam(this._cam);

    var c = this._canvas;
    var p = shouldUseHighPrecision(c.gl()) ? 'highp' : 'mediump';
    this._shaderCatalog = {
      hemilight : c.initShader(HEMILIGHT_VS,
                               PRELUDE_FS + HEMILIGHT_FS, p),
      phong : c.initShader(HEMILIGHT_VS,
                           PRELUDE_FS + PHONG_FS, p),
      outline : c.initShader(OUTLINE_VS,
                             PRELUDE_FS + OUTLINE_FS, p),
      lines : c.initShader(LINES_VS,
                           PRELUDE_FS + LINES_FS, p),
      text : c.initShader(TEXT_VS, TEXT_FS, p),
      selectLines : c.initShader(SELECT_LINES_VS,
                                 SELECT_LINES_FS, p),
      select : c.initShader(SELECT_VS, SELECT_FS, p)
    };
    if (c.gl().getExtension('EXT_frag_depth')) {
      this._shaderCatalog.spheres =
        c.initShader(SPHERES_VS,
                     PRELUDE_FS + SPHERES_FS, p);
      this._shaderCatalog.selectSpheres =
        c.initShader(SELECT_SPHERES_VS,
                     PRELUDE_FS + SELECT_SPHERES_FS, p);
    }
    this._boundDraw = ::this._draw;
    this._touchHandler = new TouchHandler(this._canvas.domElement(), this, this._cam);
    var gl = c.gl();
    var outlineOffset = 0.0;
    // in case we have fewer than 24 depth bits, we need to add offset
    // the drawn outline a tiny bit, as otherwise the outline appears on
    // top of the actual geometry.
    if (gl.getParameter(gl.DEPTH_BITS) >= 24) {
      outlineOffset = 0.00001;
    }
    var outlineProg = this._shaderCatalog.outline;
    gl.useProgram(outlineProg);
    gl.uniform1f(gl.getUniformLocation(outlineProg, 'outlineOffset'),
                 outlineOffset);
    var viewer = this;
    // call init on all registered extensions
    this._extensions.forEach(function(ext) {
      ext.init(viewer);
    });
    if (!this._initialized) {
      this._initialized = true;
      this._dispatchEvent({'name':'viewerReadyEvent'},
                                     'viewerReady',this);
    }
    return true;
  }

  requestRedraw() {
    if (this._redrawRequested) {
      return;
    }

    this._redrawRequested = true;
    requestAnimationFrame(this._boundDraw);
  }

  boundingClientRect() {
    return this._canvas.domElement().getBoundingClientRect();
  }

  _drawWithPass(pass) {
    for (var i = 0, e = this._objects.length; i !== e; ++i) {
      this._objects[i]
          .draw(this._cam, this._shaderCatalog, this._options.style, pass);
    }
  }

  _initKeyboardInput() {
    if (isiOS() || isAndroid()) {
      this._keyInput = document;
      return;
    }

    // this function creates a textarea element inside a div with height
    // and width of zero. When the user clicks on the viewer, we set
    // focus on the text area to receive text input. This makes sure we
    // only capture keypress events when the viewer is focused.
    var zeroSizedDiv = document.createElement('div');
    zeroSizedDiv.setAttribute('style', 'overflow:hidden;width:0;height:0');
    this._keyInput = document.createElement('textarea');
    this._domElement.appendChild(zeroSizedDiv);
    zeroSizedDiv.appendChild(this._keyInput);
    this._keyInput.focus();
  }

  focus() {
    if (this._keyInput !== document) {
      this._keyInput.focus();
    }
  }

  _initCanvas() {
    var canvasOptions = {
      antialias : this._options.antialias,
      forceManualAntialiasing: this._options.forceManualAntialiasing,
      height : this._options.height,
      width : this._options.width,
      backgroundColor : this._options.background
    };
    this._canvas = new Canvas(this._domElement, canvasOptions);
    this._textureCanvas = document.createElement('canvas');
    this._textureCanvas.style.display = 'none';
    this._domElement.appendChild(this._textureCanvas);
    this._mouseHandler = new MouseHandler(this._canvas, this, this._cam, this._options.animateTime);
    this._canvas.domElement().addEventListener('mousedown', ::this.focus);
  }

  translate(vector, ms) {
    var newCenter = vec3.create();
    var inverseRotation = mat4.create();
    ms |= 0;
    mat4.transpose(inverseRotation, this._cam.rotation());
    vec3.transformMat4(newCenter, vector, inverseRotation);
    vec3.sub(newCenter, this._cam.center(), newCenter);
    if (ms === 0) {
      this._cam.setCenter(newCenter);
      this.requestRedraw();
      return;
    }
    this._animControl.add(move(this._cam.center(), vec3.clone(newCenter), ms));
    this.requestRedraw();
  }

  rotate(axis, angle, ms) {
    var normalizedAxis = vec3.create();
    var targetRotation3 = mat3.create();
    var targetRotation4 = mat4.create();
    ms |= 0;
    vec3.normalize(normalizedAxis, axis);
    axisRotation(targetRotation3, normalizedAxis, angle);
    mat4.fromMat3(targetRotation4, targetRotation3);
    mat4.mul(targetRotation4, targetRotation4, this._cam.rotation());
    if (ms === 0) {
      this._cam.setRotation(targetRotation4);
      this.requestRedraw();
      return;
    }

    this._animControl.add(rotate(this._cam.rotation(), targetRotation4, ms));
    this.requestRedraw();
  }

  setRotation(rotation, ms) {
    ms |= 0;
    if (ms === 0) {
      this._cam.setRotation(rotation);
      this.requestRedraw();
      return;
    }
    // in case it's a mat3, convert to mat4
    var rotation4;
    if (rotation.length === 9) {
      rotation4 = mat4.create();
      mat4.fromMat3(rotation4, rotation);
    } else {
      rotation4 = mat4.clone(rotation);
    }
    this._animControl.add(rotate(this._cam.rotation(), rotation4, ms));
    this.requestRedraw();
  }

  setCamera(rotation, center, zoomLevel, ms) {
    ms |= 0;
    this.setCenter(center, ms);
    this.setRotation(rotation, ms);
    this.setZoom(zoomLevel, ms);
  }

  // performs interpolation of current camera position
  _animateCam() {
    var anotherRedraw = this._animControl.run(this._cam);
    if (anotherRedraw) {
      this.requestRedraw();
    }
  }

  _draw() {
    if (this._canvas === null) {
      // only happens when viewer has been destroyed
      return;
    }
    this._redrawRequested = false;
    this._animateCam();
    this._canvas.bind();
    // must be called "after" canvas.bind(). we need to some of the properties
    // calculated in canvas._ensureSize()
    this._ensureSize();
    var gl = this._canvas.gl();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var newSlab = this._options.slabMode.update(this._objects, this._cam);
    if (newSlab !== null) {
      this._cam.setNearFar(newSlab.near, newSlab.far);
    }

    gl.enable(gl.CULL_FACE);
    if (this._options.outline) {
      gl.cullFace(gl.BACK);
      gl.enable(gl.CULL_FACE);
      this._drawWithPass('outline');
    }
    gl.cullFace(gl.FRONT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    this._drawWithPass('normal');
  }

  setCenter(center, ms) {
    ms |= 0;
    if (ms === 0) {
      this._cam.setCenter(center);
      return;
    }
    this._animControl.add(move(this._cam.center(), vec3.clone(center), ms));
    this.requestRedraw();
  }

  zoom() {
    return this._cam.zoom();
  }

  setZoom(zoomLevel, ms) {
    ms |= 0;
    if (ms === 0) {
      this._cam.setZoom(zoomLevel);
      return;
    }
    this._animControl.add(zoom(this._cam.zoom(), zoomLevel, ms));
    this.requestRedraw();
  }

  centerOn(what, ms) {
    this.setCenter(what.center(), ms);
  }

  clear() {
    for (var i = 0; i < this._objects.length; ++i) {
      this._objects[i].destroy();
    }
    this._objects = [];
  }

  on(eventName, callback) {
    if (eventName === 'keypress' || eventName === 'keydown' || eventName === 'keyup') {
      // attach keyboard events to key input text area. We will
      // only receive these events in case the text area has focus. Note that
      // _keyInput is set to the document in case we are running on a
      // tablet/phone as we wold pop up the on-screen keyboard otherwise.
      this._keyInput.addEventListener(eventName, callback, false);
      return;
    }
    if (eventName === 'viewpointChanged') {
      this._cam.addOnCameraChanged(callback);
      return;
    }
    if (eventName === 'mousemove' ||
        eventName === 'mousedown' || eventName === 'mouseup') {
      this._canvas.domElement().addEventListener(eventName, callback, false);
    }

    var callbacks = this.listenerMap[eventName];
    if (typeof callbacks === 'undefined') {
      callbacks = [];
      this.listenerMap[eventName] = callbacks;
    }
    if (callback === 'center') {
      var cb = this._mouseHandler::this._mouseHandler._centerOnClicked;
      callbacks.push(cb);
    } else {
      callbacks.push(callback);
    }
    // in case viewer is already initialized, fire viewerReady immediately.
    // Otherwise, the callback would never be invoked in this case:
    //
    // document.addEventListener('DOMContentLoaded', function() {
    //    viewer = pv.Viewer(...);
    //    viewer.on('viewerReady', function(viewer) {
    //    });
    // });
    if (this._initialized && eventName === 'viewerReady') {
      // don't use dispatch here, we only want this very callback to be
      // invoked.
      callback(this, null);
    }
  }

  _dispatchEvent(event, newEventName, arg) {
    var callbacks = this.listenerMap[newEventName];
    if (callbacks) {
      callbacks.forEach(function (callback) {
        callback(arg, event);
      });
    }
  }

  /// simple dispatcher which allows to render using a certain style.
  //  will bail out if the render mode does not exist.
  renderAs(name, structure, mode, opts) {
    var found = false;
    for (var i = 0; i < this.RENDER_MODES.length; ++i) {
      if (this.RENDER_MODES[i] === mode) {
        found = true;
        break;
      }
    }
    if (!found) {
      console.error('render mode', mode, 'not supported');
      return;
    }

    return this[mode](name, structure, opts);
  }

  _handleStandardMolOptions(opts, structure) {
    opts = this._handleStandardOptions(opts);
    opts.showRelated = opts.showRelated || 'asym';
    if (opts.showRelated && opts.showRelated !== 'asym') {
      if (structure.assembly(opts.showRelated) === null) {
        console.error('no assembly with name', opts.showRelated,
                      '. Falling back to asymmetric unit');
        opts.showRelated = 'asym';
      }
    }
    return opts;
  }

  _handleStandardOptions(opts) {
    opts = Object.assign({}, opts);
    opts.float32Allocator = this._float32Allocator;
    opts.uint16Allocator = this._uint16Allocator;
    opts.idPool = this._objectIdManager;
    return opts;
  }

  lineTrace(name, structure, opts) {
    var options = this._handleStandardMolOptions(opts, structure);
    options.color = options.color || uniform([ 1, 0, 1 ]);
    options.lineWidth = options.lineWidth || 4.0;

    var obj = lineTrace(structure, this._canvas.gl(), options);
    return this.add(name, obj);
  }

  spheres(name, structure, opts) {
    var options = this._handleStandardMolOptions(opts, structure);
    options.color = options.color || byElement();
    options.sphereDetail = this.options('sphereDetail');
    options.radiusMultiplier = options.radiusMultiplier || 1.0;
    var obj;
    // in case we can write to the depth buffer from the fragment shader
    // (EXT_frag_depth) we can use billboarded spheres instead of creating
    // the full sphere geometry. That's faster AND looks better.
    if (this._canvas.gl().getExtension('EXT_frag_depth')) {
      obj = billboardedSpheres(structure, this._canvas.gl(), options);
    } else {
      obj = spheres(structure, this._canvas.gl(), options);
    }
    return this.add(name, obj);
  }

  sline(name, structure, opts) {
    var options = this._handleStandardMolOptions(opts, structure);
    options.color = options.color || uniform([ 1, 0, 1 ]);
    options.splineDetail = options.splineDetail || this.options('splineDetail');
    options.strength = options.strength || 1.0;
    options.lineWidth = options.lineWidth || 4.0;

    var obj = sline(structure, this._canvas.gl(), options);
    return this.add(name, obj);
  }

  cartoon(name, structure, opts) {
    var options = this._handleStandardMolOptions(opts, structure);
    options.color = options.color || bySS();
    options.strength = options.strength || 1.0;
    options.splineDetail = options.splineDetail || this.options('splineDetail');
    options.arcDetail = options.arcDetail || this.options('arcDetail');
    options.radius = options.radius || 0.3;
    options.forceTube = options.forceTube || false;
    options.smoothStrands = options.smoothStrands === undefined ? true : options.smoothStrands;
    var obj = cartoon(structure, this._canvas.gl(), options);
    var added = this.add(name, obj);
    return added;
  }

  surface(name, data, opts) {
    var options = this._handleStandardOptions(opts);
    var obj = surface(data, this._canvas.gl(), options);
    return this.add(name, obj);
  }

  // renders the protein using a smoothly interpolated tube, essentially
  // identical to the cartoon render mode, but without special treatment for
  // helices and strands.
  tube(name, structure, opts) {
    opts = opts || {};
    opts.forceTube = true;
    return this.cartoon(name, structure, opts);
  }

  ballsAndSticks(name, structure, opts) {
    var options = this._handleStandardMolOptions(opts, structure);

    options.color = options.color || byElement();
    options.cylRadius = options.radius || options.cylRadius || 0.1;
    options.sphereRadius = options.radius || options.sphereRadius || 0.2;
    options.arcDetail = (options.arcDetail || this.options('arcDetail')) * 2;
    options.sphereDetail = options.sphereDetail || this.options('sphereDetail');
    options.scaleByAtomRadius = optValue(options, 'scaleByAtomRadius', true);

    var obj = ballsAndSticks(structure, this._canvas.gl(), options);
    return this.add(name, obj);
  }

  lines(name, structure, opts) {
    var options = this._handleStandardMolOptions(opts, structure);
    options.color = options.color || byElement();
    options.lineWidth = options.lineWidth || 4.0;
    var obj = lines(structure, this._canvas.gl(), options);
    return this.add(name, obj);
  }

  points(name, structure, opts) {
    var options = this._handleStandardMolOptions(opts, structure);
    options.color = options.color || byElement();
    options.pointSize = options.pointSize || 1.0;
    var obj = points(structure, this._canvas.gl(), options);
    return this.add(name, obj);
  }

  trace(name, structure, opts) {
    var options = this._handleStandardMolOptions(opts, structure);
    options.color = options.color || uniform([ 1, 0, 0 ]);
    options.radius = options.radius || 0.3;
    options.arcDetail = (options.arcDetail || this.options('arcDetail')) * 2;
    options.sphereDetail = options.sphereDetail || this.options('sphereDetail');

    var obj = trace(structure, this._canvas.gl(), options);
    return this.add(name, obj);
  }

  _updateProjectionIntervals(axes, intervals, structure) {
    structure.eachAtom(function(atom) {
      var pos = atom.pos();
      for (var i = 0; i < 3; ++i) {
        intervals[i].update(vec3.dot(pos, axes[i]));
      }
    });
    for (var i = 0; i < 3; ++i) {
      intervals[i].extend(1.5);
    }
  }

  fitTo(what, ms) {
    var axes = this._cam.mainAxes();
    var intervals = [ new Range(), new Range(), new Range() ];
    if (what instanceof SceneNode) {
      what.updateProjectionIntervals(axes[0], axes[1], axes[2], intervals[0],
                                     intervals[1], intervals[2]);
    } else if (what.eachAtom !== undefined) {
      this._updateProjectionIntervals(axes, intervals, what);
    } else if (what.length !== undefined) {
      for (var i = 0; i < what.length; ++i) {
        this._updateProjectionIntervals(axes, intervals, what[i]);
      }
    }
    this._fitToIntervals(axes, intervals, ms);
  }

  _fitToIntervals(axes, intervals, ms) {
    if (intervals[0].empty() || intervals[1].empty() || intervals[2].empty()) {
      console.error('could not determine interval. No objects shown?');
      return;
    }
    var cx = intervals[0].center();
    var cy = intervals[1].center();
    var cz = intervals[2].center();
    var center = [
      cx * axes[0][0] + cy * axes[1][0] + cz * axes[2][0],
      cx * axes[0][1] + cy * axes[1][1] + cz * axes[2][1],
      cx * axes[0][2] + cy * axes[1][2] + cz * axes[2][2]
    ];
    var fovY = this._cam.fieldOfViewY();
    var aspect = this._cam.aspectRatio();
    var inPlaneX = intervals[0].length() / aspect;
    var inPlaneY = intervals[1].length();
    var inPlane = Math.max(inPlaneX, inPlaneY) * 0.5;
    var distanceToFront =  inPlane / Math.tan(0.5 * fovY);
    var newZoom =
        (distanceToFront + 0.5*intervals[2].length());
    var grace = 0.5;
    var near = Math.max(distanceToFront - grace, 0.1);
    var far = 2 * grace + distanceToFront + intervals[2].length();
    this._cam.setNearFar(near,  far);
    var time = ms === undefined ? this._options.animateTime : ms | 0;
    this.setCamera(this._cam.rotation(), center, newZoom, time);
    this.requestRedraw();
  }

  // adapt the zoom level to fit the viewport to all visible objects.
  autoZoom(ms) {
    var axes = this._cam.mainAxes();
    var intervals = [ new Range(), new Range(), new Range() ];
    this.forEach(function(obj) {
      if (!obj.visible()) {
        return;
      }
      obj.updateProjectionIntervals(axes[0], axes[1], axes[2], intervals[0],
                                    intervals[1], intervals[2]);
    });
    this._fitToIntervals(axes, intervals, ms);
  }

  autoSlab() {
    var slab = this._options._slabMode.update(this._objects, this._cam);
    if (slab !== null) {
      this._cam.setNearFar(slab.near, slab.far);
    }
    this.requestRedraw();
  }

  // enable disable rock and rolling of camera
  rockAndRoll(enable) {
    if (enable === undefined) {
      return this._rockAndRoll !== null;
    }

    if (enable) {
      if (this._rockAndRoll === null) {
        this._rockAndRoll = rockAndRoll();
        this._animControl.add(this._rockAndRoll);
        this.requestRedraw();
      }
      return true;
    }
    this._animControl.remove(this._rockAndRoll);
    this._rockAndRoll = null;
    this.requestRedraw();
    return false;
  }

  spin(speed, axis) {
    if (speed === undefined) {
      return this._spin !== null;
    }
    if (speed === false) {
      this._animControl.remove(this._spin);
      this._spin = null;
      this.requestRedraw();
      return false;
    }
    if (speed === true) {
      speed = Math.PI/8;
    }
    axis = axis || [0, 1, 0];
    if (this._spin === null) {
      this._spin = spin(axis, speed);
      this._animControl.add(this._spin);
    } else {
      this._spin.setSpeed(speed);
      this._spin.setAxis(axis);
    }
    this.requestRedraw();
    return true;
  }

  slabMode(mode, options) {
    options = options || {};
    var strategy = slabModeToStrategy(mode, options);
    var slab = strategy.update(this._objects, this._cam);
    if (slab !== null) {
      this._cam.setNearFar(slab.near, slab.far);
    }
    this._options.slabMode = strategy;
    this.requestRedraw();
  }

  label(name, text, pos, options) {
    var label = new TextLabel(this._canvas.gl(), this._textureCanvas,
                              this._2dcontext, pos, text, options);
    this.add(name, label);
    return label;
  }

  customMesh(name, opts) {
    var options = this._handleStandardOptions(opts);

    var mesh = new CustomMesh(name, this._canvas.gl(),
                              options.float32Allocator,
                              options.uint16Allocator,
                              options.idPool);
    this.add(name, mesh);
    return mesh;
  }

  // INTERNAL: draws scene into offscreen pick buffer with the "select"
  // shader.
  _drawPickingScene() {
    var gl = this._canvas.gl();
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.disable(gl.BLEND);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.clearColor(this._options.background[0], this._options.background[1],
                  this._options.background[2], 1.0);
    gl.cullFace(gl.FRONT);
    gl.enable(gl.CULL_FACE);
    this._drawWithPass('select');
  }

  pick(pos) {
    this._pickBuffer.bind();
    this._drawPickingScene();
    var pixels = new Uint8Array(4);
    var gl = this._canvas.gl();
    gl.readPixels(pos.x, this._options.height - pos.y, 1, 1,
                  gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    this._pickBuffer.release();
    if (pixels.data) {
      pixels = pixels.data;
    }
    var objId = pixels[0] | (pixels[1] << 8) | (pixels[2] << 16);
    var symIndex = pixels[3];

    var picked = this._objectIdManager.objectForId(objId);
    if (picked === undefined) {
      return null;
    }
    var transformedPos = vec3.create();
    var target = null;
    var transform = null;
    var connectivity = 'unknown';
    if (symIndex !== 255) {
      target = picked.atom;
      transform = picked.geom.symWithIndex(symIndex);
      vec3.transformMat4(transformedPos, picked.atom.pos(), transform);
      connectivity = picked.isTrace ? 'trace' : 'full';
    } else {
      if (picked.atom !== undefined) {
        target = picked.atom;
        transformedPos = picked.atom.pos();
        connectivity = picked.isTrace ? 'trace' : 'full';
      } else {
        target = picked.userData;
        transformedPos = picked.center;
      }
    }
    return new PickedObject(target, picked.geom,
                            symIndex < 255 ? symIndex : null,
                            transformedPos, picked, transform,
                            connectivity);
  }

  add(name, obj) {
    obj.name(name);
    this._objects.push(obj);
    this._objects.sort(function(lhs, rhs) {
      return lhs.order() - rhs.order();
    });
    this.requestRedraw();
    return obj;
  }

  _globToRegex(glob) {
    var r = glob.replace('.', '\\.').replace('*', '.*');
    return new RegExp('^' + r + '$');
  }

  forEach() {
    var callback;
    var pattern = '*';

    if (arguments.length === 2) {
      callback = arguments[1];
      pattern = arguments[0];
    } else {
      callback = arguments[0];
    }
    var regex = this._globToRegex(pattern);
    for (var i = 0; i < this._objects.length; ++i) {
      var obj = this._objects[i];
      if (regex.test(obj.name())) {
        callback(obj, i);
      }
    }
  }

  rotation() {
    return this._cam.rotation();
  }

  center() {
    return this._cam.center();
  }

  get(name) {
    for (var i = 0; i < this._objects.length; ++i) {
      if (this._objects[i].name() === name) {
        return this._objects[i];
      }
    }
    console.error('could not find object with name', name);
    return null;
  }

  hide(glob) {
    this.forEach(glob, function(obj) { obj.hide(); });
  }

  show(glob) {
    this.forEach(glob, function(obj) { obj.show(); });
  }

  // remove all objects whose names match the provided glob pattern from
  // the viewer.
  rm(glob) {
    var newObjects = [];
    var regex = this._globToRegex(glob);
    for (var i = 0; i < this._objects.length; ++i) {
      var obj = this._objects[i];
      if (!regex.test(obj.name())) {
        newObjects.push(obj);
      } else {
        obj.destroy();
      }
    }
    this._objects = newObjects;
  }

  all() {
    return this._objects;
  }

  isWebGLSupported() {
    return this._canvas.isWebGLSupported();
  }

  destroy() {
    this.clear();
    this._canvas.destroy();
    this._canvas = null;
  }
}

function optValue(opts, name, defaultValue) {
  if (name in opts) {
    return opts[name];
  }
  return defaultValue;
}
