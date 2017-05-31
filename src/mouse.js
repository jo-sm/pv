export default class MouseHandler {
  constructor(canvas, viewer, cam, animationTime) {
    this._viewer = viewer;
    this._canvas = canvas;
    this._cam = cam;
    this._canvas = canvas;
    this._animationTime = animationTime;
    this._lastMouseUpTime = null;

    this._boundListeners = {
      doubleClick: ::this._mouseDoubleClick,
      wheel: ::this._mouseWheel,
      down: ::this._mouseDown,
      rotate: ::this._mouseRotate,
      pan: ::this._mousePan,
      up: ::this._mouseUp
    };

    this._canvas.on('wheel', this._boundListeners.wheel);
    this._canvas.on('dblclick', this._boundListeners.doubleClick);
    this._canvas.on('mousedown', this._boundListeners.down);
  }

  _centerOnClicked(picked) {
    if (picked === null) {
      return;
    }

    this._viewer.setCenter(picked.pos(), this._animationTime);
  }

  setCam(cam) {
    this._cam = cam;
  }

  _mouseUp(event) {
    var canvas = this._canvas;
    var currentTime = (new Date()).getTime();
    if ((this._lastMouseUpTime === null ||
        currentTime - this._lastMouseUpTime > 300) &
        (currentTime - this._lastMouseDownTime < 300)) {
      var rect = this._canvas.domElement().getBoundingClientRect();
      var picked = this._viewer.pick(
          { x : event.clientX - rect.left, y : event.clientY - rect.top });
      this._viewer._dispatchEvent(event, 'click', picked);
    }

    this._lastMouseUpTime = currentTime;

    canvas.removeEventListener('mousemove', this._mouseRotateListener);
    canvas.removeEventListener('mousemove', ::this._mousePan);
    canvas.removeEventListener('mouseup', this._mouseUpListener);
    document.removeEventListener('mouseup', this._mouseUpListener);
    document.removeEventListener('mousemove', this._mouseRotateListener);
    document.removeEventListener('mousemove', this._mousePanListener);
  }

  _mouseWheel(event) {
    this._cam.zoom(event.deltaY < 0 ? 1 : -1);
    event.preventDefault();
    this._viewer.requestRedraw();
  }

  _mouseDoubleClick(event) {
    var rect = this._canvas.domElement().getBoundingClientRect();
    var picked = this._viewer.pick(
        { x : event.clientX - rect.left, y : event.clientY - rect.top });
    this._viewer._dispatchEvent(event, 'doubleClick', picked);
    this._viewer.requestRedraw();
  }

  _mouseDown(event) {
    if (event.button !== 0 && event.button !== 1) {
      return;
    }
    this._lastMouseDownTime = (new Date()).getTime();
    event.preventDefault();
    if (event.shiftKey === true || event.button === 1) {
      this._canvas.on('mousemove', this._mousePanListener);
      document.addEventListener('mousemove', this._mousePanListener, false);
    } else {
      this._canvas.on('mousemove', this._mouseRotateListener);
      document.addEventListener('mousemove', this._mouseRotateListener, false);
    }
    this._canvas.on('mouseup', this._mouseUpListener);
    document.addEventListener('mouseup', this._mouseUpListener, false);
    this._lastMousePos = { x : event.pageX, y : event.pageY };
  }

  _mouseRotate(event) {
    var newMousePos = { x : event.pageX, y : event.pageY };
    var delta = {
      x : newMousePos.x - this._lastMousePos.x,
      y : newMousePos.y - this._lastMousePos.y
    };

    var speed = 0.005;
    this._cam.rotateX(speed * delta.y);
    this._cam.rotateY(speed * delta.x);
    this._lastMousePos = newMousePos;
    this._viewer.requestRedraw();
  }

  _mousePan(event) {
    var newMousePos = { x : event.pageX, y : event.pageY };
    var delta = {
      x : newMousePos.x - this._lastMousePos.x,
      y : newMousePos.y - this._lastMousePos.y
    };

    // adjust speed according to distance to camera center, it's not
    // perfect but gives good enough results.
    var speed =
      0.002 * Math.tan(0.5 * this._cam.fieldOfViewY()) * this._cam.zoom();
    this._cam.panXY(speed * delta.x,
                    speed * delta.y);
    this._lastMousePos = newMousePos;
    this._viewer.requestRedraw();
  }
}
