// A continous range of object identifiers.
class ContinuousIdRange {
  constructor(pool, start, end) {
    this._pool = pool;
    this._start = start;
    this._next = start;
    this._end = end;
  }

  nextId(obj) {
    var id = this._next;
    console.assert(this._next < this._end);
    this._next++;
    this._pool._objects[id] = obj;
    return id;
  }

  hasLeft() {
    return this._next < this._end;
  }

  recycle() {
    this._pool.recycle(this);
  }

  length() {
    return this._end - this._start;
  }
}

// simple class that generates unique object identifiers. Identifiers are
// requested in sequential groups.
// TODO: describe why!
export default class UniqueObjectIdPool {
  MAX_ID = 16777216; // 2^24

  constructor() {
    this.clear();
  }

  getContinuousRange(num) {
    // FIXME: keep the "free" list sorted, so we can binary search it
    // for a good match
    var bestIndex = -1;
    var bestLength = null;
    for (var i = 0; i < this._free.length; ++i) {
      var free = this._free[i];
      var length = free.length();
      if (length >= num && (bestLength === null || length < bestLength)) {
        bestLength = length;
        bestIndex = i;
      }
    }
    if (bestIndex !== -1) {
      var result = this._free[bestIndex];
      this._free.splice(bestIndex, 1);
      this._usedCount ++;
      return result;
    }
    var start = this._unusedRangeStart;
    var end = start + num;
    if (end > this.MAX_ID) {
      console.error('not enough free object ids.');
      return null;
    }
    this._unusedRangeStart = end;
    var newRange = new ContinuousIdRange(this, start, end);
    this._usedCount ++;
    return newRange;
  }

  clear() {
    this._objects = {};
    this._unusedRangeStart = 1;
    this._free = [];
    this._usedCount = 0;
  }

  recycle(range) {
    for (var i = range._start; i < range._next; ++i) {
      delete this._objects[i];
    }
    range._next = range._start;
    this._free.push(range);
    this._usedCount--;
    console.assert(this._usedCount >= 0);
    if (this._free.length > 0 && this._usedCount === 0) {
      this.clear();
    }
  }

  objectForId(id) {
    return this._objects[id];
  }
}
