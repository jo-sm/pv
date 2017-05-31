import { vec3 } from '@mapbox/gl-matrix';

export class CoordGroup {
  constructor(structure) {
    this._structure = structure;
    this._frames = [];
    this._title = '';
  }

  addFrame(frame) {
    this._frames.push(frame);
  }

  useFrame(frameIndex) {
    var frame = this._frames[frameIndex];
    this._structure.eachAtom(function(atom, index) {
      var offset = index * 3;
      vec3.set(atom.pos(), frame[offset + 0], frame[offset + 1], frame[offset + 2]);
    });
  }

  set title(value) {
    this._title = value;
  }
}

const dcd = (structure, data) => {
  var cg = new CoordGroup(structure);
  var endianness = String.fromCharCode(data.getUint8(4)) +
                   String.fromCharCode(data.getUint8(5)) +
                   String.fromCharCode(data.getUint8(6)) +
                   String.fromCharCode(data.getUint8(7));
  // FIXME: error handling and different dcd variants.
  // At the moment, this only works for a very small subset of files, I
  // can't even tell you which ones.
  var swapBytes = endianness === 'DROC';
  var current = 92;
  var titleLength = data.getUint32(current, swapBytes);
  current += 4;
  var title = '';
  var i;
  for (i = 0; i < titleLength; ++i) {
    title += String.fromCharCode(data.getUint8(current));
    current += 1;
  }

  cg.title = title;

  //var fAtomCount = data.getUint32(4 * 10, swapBytes);
  var numFrames = data.getUint32(4 * 2, swapBytes);
  var format = data.getUint32(4 * 21, swapBytes);
  var perFrameHeader = false;
  if (format !== 0) {
    perFrameHeader = data.getUint32(4 * 12, swapBytes) !== 0;
  }
  current += 8;
  var tAtomCount = data.getUint32(current, swapBytes);
  current += 8;

  // read individual frames
  for (i = 0; i < numFrames; ++i) {
    var frame = new Float32Array(3 * tAtomCount);
    if (perFrameHeader) {
      current += 56;
    }
    for (var k = 0; k < 3; ++k) {
      current += 4;
      for (var j = 0; j < tAtomCount; ++j) {
        var value = data.getFloat32(current, swapBytes);
        frame[j * 3 + k] = value;
        current += 4;
      }
      current += 4;
    }
    cg.addFrame(frame);
  }
  return cg;
};

function fetch(url, callback) {
  var oReq = new XMLHttpRequest();
  oReq.open("GET", url, true);
  oReq.responseType = 'arraybuffer';
  oReq.onload = function() {
    if (oReq.response) {
      callback(new DataView(oReq.response));
    }
  };
  oReq.send(null);
}

export const fetchDcd = (url, structure, callback) => {
  fetch(url, function(data) {
    var coordGroup = dcd(structure, data);
    callback(coordGroup);
  });
};
