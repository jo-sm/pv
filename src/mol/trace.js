import { vec3 } from '@mapbox/gl-matrix';
import { cubicHermiteInterpolate } from '../geom';

export class BackboneTrace {
  constructor() {
    this._trace = [];
  }

  push(residue) {
    this._trace.push(residue);
  }

  length() {
    return this._trace.length;
  }

  residueAt(index) {
    return this._trace[index];
  }

  posAt(out, index) {
    vec3.copy(out, this._trace[index].centralAtom().pos());
    return out;
  }

  // nothing needs to be done for the backbone trace.
  smoothPosAt(out, index) {
    return this.posAt(out, index);
  }

  normalAt(out, index) {
    var residue = this._trace[index];
    if (residue.isAminoacid()) {
      vec3.sub(out, residue.atom('O').pos(), residue.atom('C').pos());
    }
    vec3.normalize(out, out);
    return out;
  }

  smoothNormalAt(out, index) {
    return this.normalAt(out, index);
  }

  centralAtomAt(index) {
    return this._trace[index].centralAtom();
  }

  tangentAt(out, index) {
    var posBefore = vec3.create();
    var posAfter = vec3.create();
    if (index > 0) {
      this.posAt(posBefore, index - 1);
    } else {
      this.posAt(posBefore, index);
    }
    if (index < this._trace.length-1) {
      this.posAt(posAfter, index + 1);
    } else {
      this.posAt(posAfter, index);
    }
    vec3.sub(out, posAfter, posBefore);
  }

  fullTraceIndex(index) {
    return index;
  }

  residues() {
    return this._trace;
  }

  subsets(residues) {
    // we assume that the residue list is ordered from N- to C-
    // terminus and we can traverse it in one go.
    var fullTraceIdx = 0;
    var listIdx = 0;
    var subsets = [];
    while (listIdx < residues.length && fullTraceIdx < this._trace.length) {
      // increase pointer until the residue indices match.
      var residueIndex = residues[listIdx].full().index();
      while (this._trace.length > fullTraceIdx &&
             this._trace[fullTraceIdx].index() < residueIndex) {
        ++fullTraceIdx;
      }
      if (fullTraceIdx >= this._trace.length) {
        break;
      }
      var traceIndex = this._trace[fullTraceIdx].index();
      while (residues.length > listIdx &&
            residues[listIdx].full().index() < traceIndex) {
        ++listIdx;
      }
      if (listIdx >= residues.length) {
        break;
      }
      var fullTraceBegin = fullTraceIdx;
      while (residues.length > listIdx && this._trace.length > fullTraceIdx &&
             residues[listIdx].full().index() ===
                this._trace[fullTraceIdx].index()) {
        ++listIdx;
        ++fullTraceIdx;
      }
      var fullTraceEnd = fullTraceIdx;
      subsets.push(new TraceSubset(this, fullTraceBegin, fullTraceEnd));
    }

    return subsets;
  }
}

// a trace subset, e.g. the part of a trace contained in a view. End regions
// are handled automatically depending on whether the beginning/end of the
// trace subset coincides with the C- and N-terminus of the full trace.
export class TraceSubset {
  constructor(fullTrace, fullTraceBegin, fullTraceEnd) {
    this._fullTrace = fullTrace;
    this._fullTraceBegin = fullTraceBegin;
    this._fullTraceEnd = fullTraceEnd;
    this._isNTerminal = this._fullTraceBegin === 0;
    this._isCTerminal = this._fullTrace.length() === this._fullTraceEnd;
    var length = this._fullTraceEnd - this._fullTraceBegin;
    if (!this._isCTerminal) {
      ++length;
    }
    if (!this._isNTerminal) {
      ++length;
      this._fullTraceBegin -= 1;
    }
    this._length = length;
  }

  length() {
    return this._length;
  }

  residueAt(index) {
    return this._fullTrace.residueAt(this._fullTraceBegin + index);
  }

  residues() {
    var residues = [];
    for (var i = 0; i < this._length; ++i) {
      residues.push(this.residueAt(i));
    }
    return residues;
  }

  _interpolate(out, indexOne, indexTwo, strength) {
    var tangentOne = vec3.create();
    var tangentTwo = vec3.create();
    this.tangentAt(tangentOne, indexOne);
    this.tangentAt(tangentTwo, indexTwo);
    vec3.scale(tangentOne, tangentOne, strength);
    vec3.scale(tangentTwo, tangentTwo, strength);
    cubicHermiteInterpolate(out, this.centralAtomAt(indexOne).pos(), tangentOne, this.centralAtomAt(indexTwo).pos(), tangentTwo, 0.5, 0);
    return out;
  }

  // like posAt, but interpolates the position for the ends with a Catmull-Rom
  // spline.
  smoothPosAt(out, index, strength) {
    if (index === 0 && !this._isNTerminal) {
      return this._interpolate(out, index, index + 1, strength);
    }
    if (index === this._length-1 && !this._isCTerminal) {
      return this._interpolate(out, index - 1, index, strength);
    }
    var atom = this.centralAtomAt(index);
    vec3.copy(out, atom.pos());
    return out;
  }

  smoothNormalAt(out, index) {
    this._fullTrace.normalAt(out, index + this._fullTraceBegin);
    return out;
  }

  posAt(out, index) {
    var atom = this.centralAtomAt(index);
    var atom2 = null;
    vec3.copy(out, atom.pos());
    if (index === 0 && !this._isNTerminal) {
      atom2 = this.centralAtomAt(index + 1);
      vec3.add(out, out, atom2.pos());
      vec3.scale(out, out, 0.5);
    }
    if (index === this._length - 1 && !this._isCTerminal) {
      atom2 = this.centralAtomAt(index - 1);
      vec3.add(out, out, atom2.pos());
      vec3.scale(out, out, 0.5);
    }
    return out;
  }

  centralAtomAt(index) {
    return this.residueAt(index).centralAtom();
  }

  fullTraceIndex(index) {
    return this._fullTraceBegin + index;
  }

  tangentAt(out, index) {
    return this._fullTrace.tangentAt(out, index + this._fullTraceBegin);
  }
}
