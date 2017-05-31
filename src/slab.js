export class Slab {
  constructor(near, far) {
    this.near = near;
    this.far = far;
  }
}

export class FixedSlab {
  constructor(options = { near: 0.1, far: 400.0 }) {
    this._near = options.near;
    this._far = options.far;
  }

  update() {
    return new Slab(this._near, this._far);
  }
}

export class AutoSlab {
  constructor() {
    this._far = 100.0;
  }

  update(objects, cam) {
    var center = cam.center();
    var radius = null;
    for (var i = 0; i < objects.length; ++i) {
      var obj = objects[i];
      if (!obj.visible()) {
        continue;
      }
      radius = obj.updateSquaredSphereRadius(center, radius);
    }
    if (radius === null) {
      return null;
    }
    radius = Math.sqrt(radius);

    var zoom = cam.zoom();
    var newFar = (radius + zoom) * 1.05;
    var newNear = 0.1;

    return new Slab(newNear, newFar);
  }
}
