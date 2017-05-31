function defaultComp(lhs, rhs) {
  return lhs < rhs;
}

// returns the index into the values array for the first value identical to
// *value*.
export const binarySearch = function(values, value, comp) {
  if (values.length === 0) {
    return -1;
  }

  comp = comp || defaultComp;
  var low = 0;
  var high = values.length;
  var mid  = (low + high) >> 1;

  while (true) {
    var midValue = values[mid];
    if (comp(value, midValue)) {
      high = mid;
    } else if (comp(midValue, value)) {
      low = mid;
    } else {
      return mid;
    }
    var newMid  = (low + high) >> 1;
    if (newMid === mid) {
      return -1;
    }
    mid = newMid;
  }
};

// returns the index of the first item in the list whose value is
// larger or equal than *value*.
export const indexFirstLargerEqualThan = function(values, value, comp) {
  comp = comp || defaultComp;
  if (values.length === 0 || comp(values[values.length - 1], value)) {
    return -1;
  }
  var low = 0;
  var high = values.length;
  var mid = (low + high) >> 1;

  while (true) {
    var midValue = values[mid];
    if (comp(value, midValue)) {
      // there might be other values larger than value with an index
      // lower than mid.
      high = mid;
    } else if (comp(midValue, value)) {
      low = mid + 1;
    } else {
      high = mid;
    }
    var newMid  = (low + high) >> 1;
    if (newMid === mid) {
      return mid;
    }
    mid = newMid;
  }
};

export const indexLastSmallerThan = function(values, value, comp) {
  comp = comp || defaultComp;
  if (values.length === 0 || comp(values[values.length-1], value)) {
    return values.length-1;
  }

  if (comp(value, values[0]) || !comp(values[0], value)) {
    return -1;
  }

  var low = 0;
  var high = values.length;
  var mid = (low + high) >> 1;

  while (true) {
    var midValue = values[mid];
    if (comp(value, midValue) || !comp(midValue, value)) {
      high = mid;
    } else {
      low = mid;
    }
    var newMid  = (low + high) >> 1;
    if (newMid === mid) {
      return mid;
    }
    mid = newMid;
  }
};

export const indexLastSmallerEqualThan = function(values, value, comp) {
  comp = comp || defaultComp;
  if (values.length === 0 || comp(values[values.length-1], value)) {
    return values.length-1;
  }

  if (comp(value, values[0])) {
    return -1;
  }

  var low = 0;
  var high = values.length;
  var mid = (low + high) >> 1;

  while (true) {
    var midValue = values[mid];
    if (comp(value, midValue)) {
      high = mid;
    } else {
      low = mid;
    }
    var newMid  = (low + high) >> 1;
    if (newMid === mid) {
      return mid;
    }
    mid = newMid;
  }
};

export class Range {
  constructor(min, max) {
    if (min === undefined || max === undefined) {
      this._empty = true;
      this._min = this._max = null;
    } else {
      this._empty = false;
      this._min = min;
      this._max = max;
    }
  }

  min() {
    return this._min;
  }

  max() {
    return this._max;
  }

  length() {
    return this._max - this._min;
  }

  empty() {
    return this._empty;
  }

  center() {
    return (this._max + this._min) * 0.5;
  }

  extend(amount) {
    this._min -= amount;
    this._max += amount;
  }

  update(val) {
    if (!this._empty) {
      if (val < this._min) {
        this._min = val;
      } else if (val > this._max) {
        this._max = val;
      }
      return;
    }
    this._min = this._max = val;
    this._empty = false;
  }
}
