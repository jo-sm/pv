import { vec3 } from '@mapbox/gl-matrix';

class AtomBase {
  bondCount() {
    return this.bonds().length;
  }

  eachBond(callback) {
    var bonds = this.bonds();
    for (var i = 0, e = bonds.length; i < e; ++i) {
      callback(bonds[i]);
    }
  }

  isConnectedTo(otherAtom) {
    if (otherAtom === null) {
      return false;
    }
    var other = otherAtom.full();
    var me = this.full();
    var bonds = this.bonds();
    for (var i = 0, e = bonds.length; i < e; ++i) {
      var bond = bonds[i];
      if ((bond.atom_one() === me && bond.atom_two() === other) ||
          (bond.atom_one() === other && bond.atom_two() === me)) {
        return true;
      }
    }
    return false;
  }
}

export class Atom extends AtomBase {
  constructor(residue, name, pos, element, index, isHetatm, occupancy, tempFactor, serial) {
    super(residue, name, pos, element, index, isHetatm, occupancy, tempFactor, serial);

    this._properties = {};
    this._residue = residue;
    this._bonds = [];
    this._isHetatm = Boolean(isHetatm);
    this._name = name;
    this._pos = pos;
    this._index = index;
    this._element = element;
    this._occupancy = occupancy !== undefined ? occupancy : null;
    this._tempFactor = tempFactor !== undefined ? tempFactor : null;
    this._serial = serial|0;
  }

  addBond(bond) {
    this._bonds.push(bond);
  }

  name() {
    return this._name;
  }

  bonds() {
    return this._bonds;
  }

  residue() {
    return this._residue;
  }

  structure() {
    return this._residue.structure();
  }

  full() {
    return this;
  }

  qualifiedName() {
    return this.residue().qualifiedName()+'.'+this.name();
  }

  pos() {
    return this._pos;
  }

  setPos(pos) {
    vec3.copy(this._pos, pos);
  }

  element() {
    return this._element;
  }

  index() {
    return this._index;
  }

  occupancy() {
    return this._occupancy;
  }

  tempFactor() {
    return this._tempFactor;
  }

  serial() {
    return this._serial;
  }

  isHetatm() {
    return this._isHetatm;
  }

  prop(propName) {
    var fn = this[propName];
    if (fn !== undefined) {
      return fn.call(this);
    }
    var property = this._properties[propName];
    return property === undefined ? 0 : property;
  }

  setProp(propName, value) {
    this._properties[propName] = value;
  }
}

export class AtomView extends AtomBase {
  constructor(resView, atom) {
    super(resView, atom);

    this._resView = resView;
    this._atom = atom;
    this._bonds = [];
  }

  full() {
    return this._atom;
  }

  name() {
    return this._atom.name();
  }

  pos() {
    return this._atom.pos();
  }

  element() {
    return this._atom.element();
  }

  residue() {
    return this._resView;
  }

  bonds() {
    return this._atom.bonds();
  }

  index() {
    return this._atom.index();
  }

  occupancy() {
    return this._atom.occupancy();
  }

  tempFactor() {
    return this._atom.tempFactor();
  }

  serial() {
    return this._atom.serial();
  }

  qualifiedName() {
    return this._atom.qualifiedName();
  }

  isHetatm() {
    return this._atom.isHetatm();
  }

  prop(propName) {
    return this._atom.prop(propName);
  }

  setProp(propName, value) {
    this._atom.setProp(propName, value);
  }
}
