import { vec3, mat3, quat } from '@mapbox/gl-matrix';
import { axisRotation } from '../geom';

// base for all animations, e.g. position transitions, slerping etc.
class Animation {
  constructor(from, to, duration) {
    this._from = from;
    this._to = to;
    this._duration = duration;
    this._left = duration;
    this._start = Date.now();
    this._looping = false;
    this._finished = false;
  }

  setLooping(looping) {
    this._looping = looping;
  }

  step(cam) {
    var now = Date.now();
    var elapsed = now - this._start;
    var t;
    if (this._duration === 0) {
      t = 1.0;
    } else {
      if (this._looping) {
        var times = Math.floor(elapsed/this._duration);
        t = (elapsed - times * this._duration)/this._duration;
      } else {
        elapsed = Math.min(this._duration, elapsed);
        t = elapsed/this._duration;
        this._finished = t === 1.0;
      }
    }
    this.apply(cam, t);
    return this._finished;
  }

  apply(cam, t) {
    var smoothInterval = (1 - Math.cos(t * Math.PI ) ) / 2;
    this._current = this._from * (1-smoothInterval) + this._to * smoothInterval;
    cam.setZoom(this._current);
  }

  finished() {
    return this._finished;
  }
}

class Move extends Animation {
  constructor(from, to, duration) {
    super(from, to, duration);

    this._current = vec3.clone(from);
  }

  apply(cam, t) {
    var smoothInterval = (1 - Math.cos(t * Math.PI ) ) / 2;
    vec3.lerp(this._current, this._from, this._to, smoothInterval);
    cam.setCenter(this._current);
  }
}

class Rotate extends Animation {
  constructor(initialRotation, destinationRotation, duration) {
    super(initialRotation, destinationRotation, duration);

    var initial = mat3.create();
    var to = mat3.create();
    mat3.fromMat4(initial, initialRotation);
    mat3.fromMat4(to, destinationRotation);
    var initialQuat = quat.create();
    var toQuat = quat.create();
    quat.fromMat3(initialQuat, initial);
    quat.fromMat3(toQuat, to);
    this._current = mat3.create();
    Animation.call(this, initialQuat, toQuat, duration);
  }

  apply(cam, t) {
    var quatRot = quat.create();
    quat.slerp(quatRot, this._from, this._to, t);
    mat3.fromQuat(this._current, quatRot);
    cam.setRotation(this._current);
  }
}

class RockAndRoll extends Animation {
  constructor(axis, duration) {
    super(null, null, duration);
    this._axis = vec3.clone(axis);
    this.setLooping(true);
    this._previousAngle = 0.0;
  }

  apply(cam, t) {
    var axisRot = mat3.create();
    var rotation = mat3.create();
    mat3.fromMat4(rotation, cam.rotation());
    var angle = 0.2 * Math.sin(2 * t * Math.PI);
    var deltaAngle = angle - this._previousAngle;
    this._previousAngle = angle;
    axisRotation(axisRot, this._axis, deltaAngle);
    mat3.mul(rotation, axisRot, rotation);
    cam.setRotation(rotation);
  }
}

class Spin extends Animation {
  constructor(axis, speed) {
    const duration = 1000 * (2 * Math.PI / speed);
    super(null, null, duration);

    this._axis = vec3.clone(axis);
    this.setLooping(true);
    this._speed = speed;
    this._previousT = 0.0;
  }

  apply(cam, t) {
    var axisRot = mat3.create();
    var rotation = mat3.create();
    mat3.fromMat4(rotation, cam.rotation());
    var angle = Math.PI * 2 * (t - this._previousT);
    this._previousT = t;
    axisRotation(axisRot, this._axis, angle);
    mat3.mul(rotation, axisRot, rotation);
    cam.setRotation(rotation);
  }

  setSpeed(speed) {
    this._speed = speed;
    this._duration = 1000 * (2 * Math.PI / speed);
  }

  setAxis(axis) {
    this._axis = axis;
  }
}

export class AnimationControl {
  constructor() {
    this._animations = [];
  }

  // apply all currently active animations to the camera
  // returns true if there are pending animations.
  run(camera) {
    var time = Date.now();
    this._animations = this._animations.filter(function(anim) {
      return !anim.step(camera, time);
    });
    return this._animations.length > 0;
  }

  add(animation) {
    this._animations.push(animation);
  }

  remove(animation) {
    this._animations = this._animations.filter(function(a) {
      return a !== animation;
    });
  }
}

export function move(from, to, duration) {
  return new Move(from, to, duration);
}

export function rotate(from, to, duration) {
  return new Rotate(from, to, duration);
}

export function zoom(from, to, duration) {
  return new Animation(from, to, duration);
}

export function spin(axis, speed) {
  return new Spin(axis, speed);
}

export function rockAndRoll() {
  return new RockAndRoll([0, 1, 0], 2000);
}
