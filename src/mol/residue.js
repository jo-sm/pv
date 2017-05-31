import { vec3 } from '@mapbox/gl-matrix';
import { Atom, AtomView  } from './atom';

class ResidueBase {
  isWater() {
    return this.name() === 'HOH' || this.name() === 'DOD';
  }

  eachAtom(callback, index) {
    index |= 0;
    for (var i =0; i< this._atoms.length; i+=1) {
      if (callback(this._atoms[i], index) === false) {
        return false;
      }
      index +=1;
    }
    return index;
  }

  qualifiedName() {
    var name =  this.chain().name() + '.' + this.name() + this.num();
    if (this.insCode() === '\0') {
      return name;
    }
    return name + this.insCode();
  }

  atom(index_or_name) {
    if (typeof index_or_name === 'string') {
      for (var i =0; i < this._atoms.length; ++i) {
        if (this._atoms[i].name() === index_or_name) {
          return this._atoms[i];
        }
      }
      return null;
    }
    if (index_or_name >= this._atoms.length || index_or_name < 0) {
      return null;
    }
    return this._atoms[index_or_name];
  }

  // CA for amino acids, P for nucleotides, nucleosides
  centralAtom() {
    if (this.isAminoacid()) {
      return this.atom('CA');
    }
    if (this.isNucleotide()) {
      return this.atom('C3\'');
    }
    return null;
  }

  center() {
    var count = 0;
    var c = vec3.create();
    this.eachAtom(function(atom) {
      vec3.add(c, c, atom.pos());
      count += 1;
    });
    if (count > 0) {
      vec3.scale(c, c, 1.0/count);
    }
    return c;
  }

  isAminoacid() {
    return this._isAminoacid;
  }

  isNucleotide() {
    return this._isNucleotide;
  }
}

export class Residue extends ResidueBase {
  constructor(chain, name, num, insCode) {
    super(chain, name, num, insCode);

    this._name = name;
    this._num = num;
    this._insCode = insCode;
    this._atoms = [];
    this._ss = 'C';
    this._chain = chain;
    this._isAminoacid = false;
    this._isNucleotide = false;
    this._index = chain.residues().length;
    this._properties = {};
  }

  _deduceType() {
    this._isNucleotide = this.atom('P')!== null && this.atom('C3\'') !== null;
    this._isAminoacid = this.atom('N') !== null && this.atom('CA') !== null &&
                        this.atom('C') !== null && this.atom('O') !== null;
  }

  name() { return this._name; }
  insCode() { return this._insCode; }

  num() { return this._num; }

  full() { return this; }

  addAtom(name, pos, element, isHetatm, occupancy,
                     tempFactor, serial) {
    var atom = new Atom(this, name, pos, element,
                        this.structure().nextAtomIndex(),
                        isHetatm, occupancy, tempFactor, serial|0);
    this._atoms.push(atom);
    return atom;
  }

  ss() { return this._ss; }
  setSS(ss) { this._ss = ss; }
  index() { return this._index; }

  atoms() { return this._atoms; }
  chain() { return this._chain; }


  structure() {
    return this._chain.structure();
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

export class ResidueView extends ResidueBase {
  constructor(chainView, residue) {
    super(chainView, residue);

    this._chainView = chainView;
    this._atoms = [];
    this._residue = residue;
  }

  addAtom(atom, checkDuplicates) {
    if (checkDuplicates) {
      for (var i = 0; i < this._atoms.length; ++i) {
        var ai = this._atoms[i];
        if (ai.index() === atom.index()) {
          return ai;
        }
      }
    }
    var atomView = new AtomView(this, atom.full());
    this._atoms.push(atomView);
    return atomView;
  }
  removeAtom(atom) {
    var lengthBefore = this._atoms.length;
    this._atoms = this._atoms.filter(function(a) {
      return a.index() !== atom.index();
    });
    return lengthBefore !== this._atoms.length;
  }

  full() { return this._residue; }
  num() { return this._residue.num(); }

  insCode() {
    return this._residue.insCode();
  }
  ss() { return this._residue.ss(); }
  index() { return this._residue.index(); }
  chain() { return this._chainView; }
  name() { return this._residue.name(); }

  atoms() { return this._atoms; }
  qualifiedName() {
    return this._residue.qualifiedName();
  }

  containsResidue(residue) {
    return this._residue.full() === residue.full();
  }
  isAminoacid() {
    return this._residue.isAminoacid();
  }
  isNucleotide() {
    return this._residue.isNucleotide();
  }
  isWater() {
    return this._residue.isWater();
  }
  prop(propName) {
    return this._residue.prop(propName);
  }
  setProp(propName, value) {
    this._residue.setProp(propName, value);
  }
}

