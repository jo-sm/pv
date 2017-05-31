import { vec3 } from '@mapbox/gl-matrix';
import { Sphere } from '../geom';

export default class VertexArrayBase {
  constructor(gl, numVerts, float32Allocator) {
    this._gl = gl;
    this._vertBuffer = gl.createBuffer();
    this._float32Allocator = float32Allocator || null;
    this._ready = false;
    this._boundingSphere = null;
    var numFloats = this._FLOATS_PER_VERT * numVerts;
    this._vertData = float32Allocator.request(numFloats);
  }

  setColor(index, r, g, b, a) {
    var colorStart = index * this._FLOATS_PER_VERT + this._COLOR_OFFSET;
    this._vertData[colorStart + 0] = r;
    this._vertData[colorStart + 1] = g;
    this._vertData[colorStart + 2] = b;
    this._vertData[colorStart + 3] = a;
    this._ready = false;
  }

  getColor(index, color) {
    var colorStart = index * this._FLOATS_PER_VERT + this._COLOR_OFFSET;
    color[0] = this._vertData[colorStart + 0];
    color[1] = this._vertData[colorStart + 1];
    color[2] = this._vertData[colorStart + 2];
    color[3] = this._vertData[colorStart + 3];
    return color;
  }

  setOpacity(index, a) {
    var colorStart = index * this._FLOATS_PER_VERT + this._COLOR_OFFSET;
    this._vertData[colorStart + 3] = a;
    this._ready = false;
  }

  setSelected(index, a) {
    var selected = index * this._FLOATS_PER_VERT + this._SELECT_OFFSET;
    this._vertData[selected] = a;
    this._ready = false;
  }


  boundingSphere() {
    if (!this._boundingSphere) {
      this._boundingSphere = this._calculateBoundingSphere();
    }
    return this._boundingSphere;
  }


  _calculateBoundingSphere() {
    var numVerts = this.numVerts();
    if (numVerts === 0) {
      return null;
    }
    var center = vec3.create();
    var index;
    var i;
    for (i = 0; i < numVerts; ++i) {
      index = i * this._FLOATS_PER_VERT;
      center[0] += this._vertData[index + 0];
      center[1] += this._vertData[index + 1];
      center[2] += this._vertData[index + 2];
    }
    vec3.scale(center, center, 1.0/numVerts);
    var radiusSquare = 0.0;
    for (i = 0; i < numVerts; ++i) {
      index = i * this._FLOATS_PER_VERT;
      var dx  = center[0] - this._vertData[index + 0];
      var dy  = center[1] - this._vertData[index + 1];
      var dz  = center[2] - this._vertData[index + 2];
      radiusSquare = Math.max(radiusSquare, dx*dx + dy*dy + dz*dz);
    }
    return new Sphere(center, Math.sqrt(radiusSquare));
  }

  destroy() {
    this._gl.deleteBuffer(this._vertBuffer);
    this._float32Allocator.release(this._vertData);
  }

  bindBuffers() {
    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vertBuffer);
    if (this._ready) {
      return;
    }
    this._gl.bufferData(this._gl.ARRAY_BUFFER, this._vertData,
                        this._gl.STATIC_DRAW);
    this._ready = true;
  }

  // Helper method to calculate the squared bounding sphere radius of the
  // sphere centered on "sphereCenter" over multiple vertex arrays.
  updateSquaredSphereRadius(sphereCenter, radius, transform) {
    var transformedCenter = vec3.create();
    var bounds = this.boundingSphere();
    if (!bounds) {
      return radius;
    }
    // Note: Math.max(radius, null) returns the radius for positive values
    // of radius, which is exactly what we want.
    if (transform) {
      vec3.transformMat4(transformedCenter, bounds.center(), transform);
      return Math.max(vec3.sqrDist(transformedCenter, sphereCenter), radius);
    }

    var sphereRadSquare = bounds.radius() * bounds.radius();
    return Math.max(vec3.sqrDist(bounds.center(), sphereCenter) + sphereRadSquare, radius);
  }

  updateProjectionIntervals(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval, transform) {
    var transformedCenter = vec3.create();
    var bounds = this.boundingSphere();
    if (!bounds) {
      return;
    }
    if (transform) {
      vec3.transformMat4(transformedCenter, bounds.center(), transform);
    } else {
      vec3.copy(transformedCenter, bounds.center());
    }
    var xProjected = vec3.dot(xAxis, transformedCenter);
    var yProjected = vec3.dot(yAxis, transformedCenter);
    var zProjected = vec3.dot(zAxis, transformedCenter);
    xInterval.update(xProjected - bounds.radius());
    xInterval.update(xProjected + bounds.radius());
    yInterval.update(yProjected - bounds.radius());
    yInterval.update(yProjected + bounds.radius());
    zInterval.update(zProjected - bounds.radius());
    zInterval.update(zProjected + bounds.radius());
  }
}
