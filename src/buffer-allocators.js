export default class PoolAllocator {
  constructor(bufferType) {
    this._freeArrays = [];
    this._bufferType = bufferType;
  }

  request(requestedLength) {
    var bestIndex = -1;
    var bestLength = null;
    for (var i = 0; i < this._freeArrays.length; ++i) {
      var free = this._freeArrays[i];
      var length = free.length;
      if (length >= requestedLength && (bestLength === null || length < bestLength)) {
        bestLength = length;
        bestIndex = i;
      }
    }
    if (bestIndex !== -1) {
      var result = this._freeArrays[bestIndex];
      this._freeArrays.splice(bestIndex, 1);
      return result;
    }
    return new this._bufferType(requestedLength);
  }

  release(buffer) {
    this._freeArrays.push(buffer);
  }
}
