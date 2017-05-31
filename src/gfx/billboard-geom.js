import MeshGeom from './mesh-geom';

export default class BillboardGeom extends MeshGeom {
  draw(cam, shaderCatalog, style, pass) {
    // we need the back-faces for the outline rendering
    this._gl.disable(this._gl.CULL_FACE);
    MeshGeom.prototype.draw.call(this, cam, shaderCatalog, style, pass);
    this._gl.enable(this._gl.CULL_FACE);
  }

  shaderForStyleAndPass(shaderCatalog, style, pass) {
    // the normal pass contains render code for both the normal
    // and outline pass which is toggled on/off by a boolean
    // uniform.
    if (pass === 'normal') {
      return shaderCatalog.spheres;
    }

    if (pass === 'select') {
      return shaderCatalog.selectSpheres;
    }

    return null;
  }
}
