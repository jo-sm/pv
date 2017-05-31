import { vec3 } from '@mapbox/gl-matrix';
import { Residue, ResidueView } from './residue';
import { BackboneTrace } from './trace';
import { binarySearch, indexFirstLargerEqualThan, indexLastSmallerEqualThan } from '../utils';

// combines the numeric part of the residue number with the insertion
// code and returns a single number. Note that this is completely safe
// and we do not have to worry about overflows, as for PDB files the
// range of permitted residue numbers is quite limited anyway.
function rnumInsCodeHash(num, insCode) {
  return num << 8 | insCode.charCodeAt(0);
}

function rnumComp(lhs, rhs) {
  return lhs.num() < rhs.num();
}

function numify(val) {
  return { num : function() { return val; }};
}

class ChainBase {
  eachAtom(callback, index) {
    index |= 0;
    for (var i = 0; i< this._residues.length; i+=1) {
      index = this._residues[i].eachAtom(callback, index);
      if (index === false) {
        return false;
      }
    }
    return index;
  }

  atomCount() {
    var count = 0;
    var residues = this.residues();
    for (var ri = 0; ri < residues.length; ++ri) {
      count+= residues[ri].atoms().length;
    }
    return count;
  }

  eachResidue(callback) {
    for (var i = 0; i < this._residues.length; i+=1) {
      if (callback(this._residues[i]) === false) {
        return false;
      }
    }
  }

  residues() {
    return this._residues;
  }

  structure() {
    return this._structure;
  }

  asView() {
    var view = this.structure().createEmptyView();
    view.addChain(this, true);
    return view;
  }

  residueByRnum(rnum) {
    var residues = this.residues();
    if (this._rnumsOrdered) {
      var index = binarySearch(residues, numify(rnum), rnumComp);
      if (index === -1) {
        return null;
      }
      return residues[index];
    } else {
      for (var i = 0; i < residues.length; ++i) {
        if (residues[i].num() === rnum) {
          return residues[i];
        }
      }
      return null;
    }
  }

  residuesInRnumRange(start, end) {
    // FIXME: this currently only works with the numeric part, insertion
    // codes are not honoured.
    var matching = [];
    var i;
    var e;
    var residues = this.residues();
    if (this._rnumsOrdered === true) {
      // binary search our way to heaven
      var startIdx = indexFirstLargerEqualThan(residues, numify(start), rnumComp);
      if (startIdx === -1) {
        return matching;
      }
      var endIdx = indexLastSmallerEqualThan(residues, numify(end), rnumComp);
      if (endIdx === -1) {
        return matching;
      }
      for (i = startIdx; i <= endIdx; ++i) {
        matching.push(this._residues[i]);
      }
    } else {
      for (i = 0, e = residues.length; i !== e; ++i) {
        var res = residues[i];
        if (res.num() >= start && res.num() <= end) {
          matching.push(res);
        }
      }
    }
    return matching;
  }

  prop(propName) {
    return this[propName]();
  }
}

export class Chain extends ChainBase {
  constructor(structure, name) {
    super(structure, name);

    this._structure = structure;
    this._name = name;
    this._cachedTraces = [];
    this._residues = [];
    this._rnumsOrdered = true;
  }

  name() {
    return this._name;
  }

  full() {
    return this;
  }

  addResidue(name, num, insCode) {
    insCode = insCode || '\0';
    var residue = new Residue(this, name, num, insCode);
    this._rnumsOrdered = checkRnumsOrdered(this._residues, this._rnumsOrdered, residue);
    this._residues.push(residue);
    return residue;
  }

  // assigns secondary structure to residues in range from_num to to_num.
  assignSS(fromNumAndIns, toNumAndIns, ss) {
    // FIXME: when the chain numbers are completely ordered, perform binary
    // search to identify range of residues to assign secondary structure to.
    var from = rnumInsCodeHash(fromNumAndIns[0], fromNumAndIns[1]);
    var to = rnumInsCodeHash(toNumAndIns[0], toNumAndIns[1]);
    for (var i = 1; i < this._residues.length-1; ++i) {
      var res = this._residues[i];
      // FIXME: we currently don't set the secondary structure of the last
      // residue of helices and sheets. that takes care of better transitions
      // between coils and helices. ideally, this should be done in the
      // cartoon renderer, NOT in this function.
      var combined = rnumInsCodeHash(res.num(), res.insCode());
      if (combined <  from || combined >= to) {
        continue;
      }
      res.setSS(ss);
    }
  }

  // invokes a callback for each connected stretch of amino acids. these
  // stretches are used for all trace-based rendering styles, e.g. sline,
  // line_trace, tube, cartoon etc.
  eachBackboneTrace(callback) {
    this._cacheBackboneTraces();
    for (var i=0; i < this._cachedTraces.length; ++i) {
      callback(this._cachedTraces[i]);
    }
  }

  _cacheBackboneTraces() {
    if (this._cachedTraces.length > 0) {
      return;
    }
    var stretch = new BackboneTrace();
    // true when the stretch consists of amino acid residues, false
    // if the stretch consists of nucleotides, null otherwise.
    var aaStretch = null;
    for (var i = 0; i < this._residues.length; i+=1) {
      var residue = this._residues[i];
      var isAminoacid = residue.isAminoacid();
      var isNucleotide = residue.isNucleotide();
      if ((aaStretch  === true && !isAminoacid) ||
          (aaStretch === false && !isNucleotide) ||
          (aaStretch === null && !isNucleotide && !isAminoacid)) {
        // a break in the trace: push stretch if there were enough residues
        // in it and create new backbone trace.
        addNonEmptyTrace(this._cachedTraces, stretch);
        aaStretch = null;
        stretch = new BackboneTrace();
        continue;
      }
      if (stretch.length() === 0) {
        stretch.push(residue);
        aaStretch = residue.isAminoacid();
        continue;
      }
      var prevResidue = this._residues[i-1];
      if (shouldIntroduceTraceBreak(aaStretch, prevResidue, residue)) {
        addNonEmptyTrace(this._cachedTraces, stretch);
        stretch = new BackboneTrace();
      }
      stretch.push(residue);
    }
    addNonEmptyTrace(this._cachedTraces, stretch);
  }

  // returns all connected stretches of amino acids found in this chain as
  // a list.
  backboneTraces() {
    var traces = [];
    this.eachBackboneTrace(function(trace) { traces.push(trace); });
    return traces;
  }
}

// helper function to determine whether a trace break should be introduced
// between two residues of the same type (amino acid, or nucleotides).
//
// aaStretch: indicates whether the residues are to be treated as amino
// acids
function shouldIntroduceTraceBreak(aaStretch, prevResidue, thisResidue) {
  // these checks are on purpose more relaxed than the checks we use in
  // deriveConnectivity(). We don't really care about correctness of bond
  // lengths here. The only thing that matters is that the residues are
  // more or less close so that they could potentially be connected.
  var prevAtom;
  var thisAtom;

  if (aaStretch) {
    prevAtom = prevResidue.atom('C');
    thisAtom = thisResidue.atom('N');
  } else {
    prevAtom = prevResidue.atom('O3\'');
    thisAtom = thisResidue.atom('P');
  }

  // in case there is a bond, we don't introduce a chain break
  if (prevAtom.isConnectedTo(thisAtom)) {
    return false;
  }
  var sqrDist = vec3.sqrDist(prevAtom.pos(), thisAtom.pos());
  return (Math.abs(sqrDist - 1.5*1.5) > 1);
}

function addNonEmptyTrace(traces, trace) {
  if (trace.length() < 2) {
    return;
  }
  traces.push(trace);
}

function checkRnumsOrdered(residues, orderedFlag, newResidue) {
  if (residues.length === 0) {
    return true;
  }
  if (!orderedFlag) {
    return false;
  }
  var combinedRNum = rnumInsCodeHash(newResidue.num(), newResidue.insCode());
  var last = residues[residues.length-1];
  var lastCombinedRNum = rnumInsCodeHash(last.num(), last.insCode());
  return lastCombinedRNum < combinedRNum;
}

export class ChainView extends ChainBase {
  constructor(molView, chain) {
    super(molView, chain);

    this._chain = chain;
    this._residues = [];
    this._molView = molView;
    this._residueMap = {};
    this._rnumsOrdered = true;
  }

  addResidue(residue, recurse) {
    var resView = new ResidueView(this, residue.full());
    this._rnumsOrdered = checkRnumsOrdered(this._residues,
                                           this._rnumsOrdered,
                                           residue);
    this._residues.push(resView);
    this._residueMap[residue.full().index()] = resView;
    if (recurse) {
      var atoms = residue.atoms();
      for (var i = 0; i < atoms.length; ++i) {
        resView.addAtom(atoms[i].full(), false);
      }
    }
    return resView;
  }

  addAtom(atom) {
    var resView = this._residueMap[atom.residue().full().index()];
    if (resView === undefined) {
      resView = this.addResidue(atom.residue());
    }
    return resView.addAtom(atom, true);
  }

  removeAtom(atom, removeEmptyResidues) {
    var resView = this._residueMap[atom.residue().full().index()];
    if (resView === undefined) {
      return false;
    }
    var removed = resView.removeAtom(atom);
    if (removed && resView.atoms().length === 0 && removeEmptyResidues) {
      delete this._residueMap[atom.residue().full().index()];
      // FIXME: this is terribly slow.
      this._residues = this._residues.filter(function(r) {
        return r !== resView;
      });
    }
    return removed;
  }

  containsResidue(residue) {
    var resView = this._residueMap[residue.full().index()];
    if (resView === undefined) {
      return false;
    }
    return resView.full() === residue.full();
  }

  eachBackboneTrace(callback) {
    // backbone traces for the view must be based on the the full
    // traces for the following reasons:
    //  - we must be able to display subsets with one residue in length,
    //    when they are part of a larger trace.
    //  - when a trace residue is not at the end, e.g. the C-terminal or
    //    N-terminal end of the full trace, the trace residue starts
    //    midway between the residue and the previous, and ends midway
    //    between the residue and the next.
    //  - the tangents for the Catmull-Rom spline depend on the residues
    //    before and after. Thus, to get the same curvature for a
    //    trace subset, the residues before and after must be taken
    //    into account.
    var fullTraces = this._chain.backboneTraces();

    for (var i = 0; i < fullTraces.length; ++i) {
      var subsets = fullTraces[i].subsets(this._residues);
      for (var j = 0; j < subsets.length; ++j) {
        callback(subsets[j]);
      }
    }
  }

  backboneTraces() {
    var traces = [];
    this.eachBackboneTrace(function(trace) { traces.push(trace); });

    return traces;
  }

  full() {
    return this._chain;
  }

  name() {
    return this._chain.name();
  }

  structure() {
    return this._molView;
  }
}
