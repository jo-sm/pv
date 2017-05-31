import { vec3 } from '@mapbox/gl-matrix';
import SceneNode from './scene-node';

function eachCentralAtomAsym(structure, callback) {
  structure.eachResidue(function(residue) {
    var centralAtom = residue.centralAtom();
    if (centralAtom === null) {
      return;
    }
    callback(centralAtom, centralAtom.pos());
  });
}

var eachCentralAtomSym = function(structure, gens, callback) {
  var transformedPos = vec3.create();
  for (var i = 0; i < gens.length; ++i) {
    var gen = gens[i];
    var chains = structure.chainsByName(gen.chains());
    for (var j = 0; j < gen.matrices().length; ++j) {
      var matrix = gen.matrix(j);
      for (var k = 0; k < chains.length; ++k) {
        var chain = chains[k];
        for (var l = 0; l < chain.residues().length; ++l) {
          var centralAtom = chain.residues()[l].centralAtom();
          if (centralAtom === null) {
            continue;
          }
          vec3.transformMat4(transformedPos, centralAtom.pos(), matrix);
          callback(centralAtom, transformedPos);
        }
      }
    }
  }
};

export default class BaseGeom extends SceneNode {
  constructor(gl) {
    super(gl);

    this._idRanges = [];
    this._vertAssocs = [];
    this._showRelated = null;
    this._selection = null;
  }

  setShowRelated(rel) {
    if (rel && rel !== 'asym') {
      if (this.structure().assembly(rel) === null) {
        console.error('no assembly with name', rel,
                      '. Falling back to asymmetric unit');
        return;
      }
    }
    this._showRelated = rel;
    return rel;
  }

  symWithIndex(index) {
    if (this.showRelated() === 'asym') {
      return null;
    }
    var assembly = this.structure().assembly(this.showRelated());
    if (!assembly) {
      return null;
    }
    var gen = assembly.generators();
    for (var i = 0; i < gen.length; ++i) {
      if (gen[i].matrices().length > index) {
        return gen[i].matrix(index);
      }
      index -= gen[i].matrices().length;
    }
    return null;
  }

  showRelated() {
    return this._showRelated;
  }

  select(what) {
    return this.structure().select(what);
  }

  structure() {
    return this._vertAssocs[0]._structure;
  }

  getColorForAtom(atom, color) {
    // FIXME: what to do in case there are multiple assocs?
    return this._vertAssocs[0].getColorForAtom(atom, color);
  }

  addIdRange(range) {
    this._idRanges.push(range);
  }

  destroy() {
    SceneNode.prototype.destroy.call(this);
    for (var i = 0; i < this._idRanges.length; ++i) {
      this._idRanges[i].recycle();
    }
  }

  eachCentralAtom(callback) {
    var go = this;
    var structure = go.structure();
    var assembly = structure.assembly(go.showRelated());
    // in case there is no assembly, just loop over all the atoms contained
    // in the structure and invoke the callback as is
    if (assembly === null) {
      return eachCentralAtomAsym(structure, callback);
    }
    return eachCentralAtomSym(structure, assembly.generators(), callback);
  }

  addVertAssoc(assoc) {
    this._vertAssocs.push(assoc);
  }

  // returns all vertex arrays that contain geometry for one of the specified
  // chain names. Typically, there will only be one array for a given chain,
  // but for larger chains with mesh geometries a single chain may be split
  // across multiple vertex arrays.
  _vertArraysInvolving(chains) {
    var vertArrays = this.vertArrays();
    var selectedArrays = [];
    var set = {};
    for (var ci = 0; ci < chains.length; ++ci) {
      set[chains[ci]] = true;
    }
    for (var i = 0; i < vertArrays.length; ++i) {
      if (set[vertArrays[i].chain()] === true) {
        selectedArrays.push(vertArrays[i]);
      }
    }
    return selectedArrays;
  }

  // draws vertex arrays by using the symmetry generators contained in assembly
  _drawSymmetryRelated(cam, shader, assembly) {
    var gens = assembly.generators();
    for (var i = 0; i < gens.length; ++i) {
      var gen = gens[i];
      var affectedVAs = this._vertArraysInvolving(gen.chains());
      this._drawVertArrays(cam, shader, affectedVAs, gen.matrices());
    }
  }

  _updateProjectionIntervalsAsym(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval) {
    var vertArrays = this.vertArrays();
    for (var i = 0; i < vertArrays.length; ++i) {
      vertArrays[i].updateProjectionIntervals(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval);
    }
  }

  updateProjectionIntervals(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval) {
    if (!this._visible) {
      return;
    }

    var showRelated = this.showRelated();
    if (showRelated === 'asym') {
      return this._updateProjectionIntervalsAsym(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval);
    }
    var assembly = this.structure().assembly(showRelated);
    // in case there is no assembly, fallback to asymmetric unit and bail out.
    var gens = assembly.generators();
    for (var i = 0; i < gens.length; ++i) {
      var gen = gens[i];
      var affectedVAs = this._vertArraysInvolving(gen.chains());
      for (var j = 0; j < gen.matrices().length; ++j) {
        for (var k = 0; k < affectedVAs.length; ++k) {
          var transform = gen.matrix(j);
          affectedVAs[k].updateProjectionIntervals(xAxis, yAxis, zAxis,
                                                   xInterval, yInterval,
                                                   zInterval, transform);
        }
      }
    }
  }

  // FIXME: investigate the performance cost of sharing code between
  // updateSquaredSphereRadius and updateProjectionIntervals
  _updateSquaredSphereRadiusAsym(center, radius) {
    var vertArrays = this.vertArrays();
    for (var i = 0; i < vertArrays.length; ++i) {
      radius = vertArrays[i].updateSquaredSphereRadius(center, radius);
    }
    return radius;
  }

  updateSquaredSphereRadius(center, radius) {
    if (!this._visible) {
      return radius;
    }
    var showRelated = this.showRelated();
    if (showRelated === 'asym') {
      return this._updateSquaredSphereRadiusAsym(center, radius);
    }
    var assembly = this.structure().assembly(showRelated);
    var gens = assembly.generators();
    for (var i = 0; i < gens.length; ++i) {
      var gen = gens[i];
      var affectedVAs = this._vertArraysInvolving(gen.chains());
      for (var j = 0; j < gen.matrices().length; ++j) {
        for (var k = 0; k < affectedVAs.length; ++k) {
          // FIXME: is this correct?
          // var transform = gen.matrix(j);
          radius = affectedVAs[k].updateSquaredSphereRadius(center, radius);
        }
      }
    }
    return radius;
  }

  draw(cam, shaderCatalog, style, pass) {

    if (!this._visible) {
      return;
    }

    var shader = this.shaderForStyleAndPass(shaderCatalog, style, pass);

    if (!shader) {
      return;
    }
    var showRelated = this.showRelated();
    if (showRelated === 'asym') {
      return this._drawVertArrays(cam, shader, this.vertArrays(), null);
    }

    var assembly = this.structure().assembly(showRelated);
    return this._drawSymmetryRelated(cam, shader, assembly);
  }

  colorBy(colorFunc, view) {
    console.time('BaseGeom.colorBy');
    this._ready = false;
    view = view || this.structure();
    for (var i = 0; i < this._vertAssocs.length; ++i) {
      this._vertAssocs[i].recolor(colorFunc, view);
    }
    console.timeEnd('BaseGeom.colorBy');
  }

  setOpacity(val, view) {
    console.time('BaseGeom.setOpacity');
    this._ready = false;
    view = view || this.structure();
    for (var i = 0; i < this._vertAssocs.length; ++i) {
      this._vertAssocs[i].setOpacity(val, view);
    }
    console.timeEnd('BaseGeom.setOpacity');
  }

  setSelection(view) {
    console.time('BaseGeom.setSelection');
    this._selection = view;
    this._ready = false;
    for (var i = 0; i < this._vertAssocs.length; ++i) {
      this._vertAssocs[i].setSelection(view);
    }
    console.timeEnd('BaseGeom.setSelection');
  }

  selection() {
    if (this._selection === null) {
      this._selection = this.structure().createEmptyView();
    }
    return this._selection;
  }
}
