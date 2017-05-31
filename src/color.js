import { vec4 } from '@mapbox/gl-matrix';

export const rgb = {
  create: vec4.create,
  scale: vec4.scale,
  copy: vec4.copy,
  clone: vec4.clone,
  fromValues: vec4.fromValues,
  mix: (out, colorOne, colorTwo, t) => {
    const oneMinusT = 1.0 - t;

    out[0] = colorOne[0] * t + colorTwo[0] * oneMinusT;
    out[1] = colorOne[1] * t + colorTwo[1] * oneMinusT;
    out[2] = colorOne[2] * t + colorTwo[2] * oneMinusT;
    out[3] = colorOne[3] * t + colorTwo[3] * oneMinusT;

    return out;
  }
};

let COLORS = {
  white:        rgb.fromValues(1.0, 1.0 , 1.0, 1.0),
  black:        rgb.fromValues(0.0, 0.0 , 0.0, 1.0),
  grey:         rgb.fromValues(0.5, 0.5 , 0.5, 1.0),
  lightgrey:    rgb.fromValues(0.8, 0.8 , 0.8, 1.0),
  darkgrey:     rgb.fromValues(0.3, 0.3 , 0.3, 1.0),
  red:          rgb.fromValues(1.0, 0.0 , 0.0, 1.0),
  darkred:      rgb.fromValues(0.5, 0.0 , 0.0, 1.0),
  lightred:     rgb.fromValues(1.0, 0.5 , 0.5, 1.0),
  green:        rgb.fromValues(0.0, 1.0 , 0.0, 1.0),
  darkgreen:    rgb.fromValues(0.0, 0.5 , 0.0, 1.0),
  lightgreen:   rgb.fromValues(0.5, 1.0 , 0.5, 1.0),
  blue:         rgb.fromValues(0.0, 0.0 , 1.0, 1.0),
  darkblue:     rgb.fromValues(0.0, 0.0 , 0.5, 1.0),
  lightblue:    rgb.fromValues(0.5, 0.5 , 1.0, 1.0),
  yellow:       rgb.fromValues(1.0, 1.0 , 0.0, 1.0),
  darkyellow:   rgb.fromValues(0.5, 0.5 , 0.0, 1.0),
  lightyellow:  rgb.fromValues(1.0, 1.0 , 0.5, 1.0),
  cyan:         rgb.fromValues(0.0, 1.0 , 1.0, 1.0),
  darkcyan:     rgb.fromValues(0.0, 0.5 , 0.5, 1.0),
  lightcyan:    rgb.fromValues(0.5, 1.0 , 1.0, 1.0),
  magenta:      rgb.fromValues(1.0, 0.0 , 1.0, 1.0),
  darkmagenta:  rgb.fromValues(0.5, 0.0 , 0.5, 1.0),
  lightmagenta: rgb.fromValues(1.0, 0.5 , 1.0, 1.0),
  orange:       rgb.fromValues(1.0, 0.5 , 0.0, 1.0),
  darkorange:   rgb.fromValues(0.5, 0.25, 0.0, 1.0),
  lightorange:  rgb.fromValues(1.0, 0.75, 0.5, 1.0)
};

export const hex2rgb = (color, alpha = 1.0) => {
  let r;
  let g;
  let b;
  let a;

  if (color.length === 4 || color.length === 5 ) {
    r = parseInt(color[1], 16);
    g = parseInt(color[2], 16);
    b = parseInt(color[3], 16);
    a = Math.round(alpha * 15);

    if(color.length === 5) {
      a = parseInt(color[4], 16);
    }

    const oneOver15 = 1/15.0;

    return rgb.fromValues(oneOver15 * r, oneOver15 * g, oneOver15 * b, oneOver15 * a);
  }

  if (color.length === 7 || color.length === 9) {
    r = parseInt(color.substr(1, 2), 16);
    g = parseInt(color.substr(3, 2), 16);
    b = parseInt(color.substr(5, 2), 16);
    a = Math.round(255 * alpha);

    if(color.length === 9) {
      a = parseInt(color.substr(7, 2), 16);
    }

    const oneOver255 = 1/255.0;

    return rgb.fromValues(oneOver255 * r, oneOver255 * g, oneOver255 * b, oneOver255 * a);
  }
};

export const setColorPalette = (customColors) => {
  console.log("setting colors");

  COLORS = customColors;

  resetGradients();
};

// internal function to force various types into an RGBA quadruplet
export const forceRGB = (color, alpha = 1.0) => {
  if (typeof color === 'string') {
    const lookup = COLORS[color];

    if (lookup !== undefined) {
      color = rgb.clone(lookup);
      color[3] = alpha;
    }

    if (color.length > 0 && color[0] === '#') {
      return hex2rgb(color, alpha);
    }
  }

  // in case no alpha component is provided, default alpha to 1.0
  if (color.length === 3) {
    return [color[0], color[1], color[2], alpha];
  }

  return color;
};

class Gradient {
  constructor(colors, stops) {
    this._colors = colors.map(color => forceRGB(color));
    this._stops = stops;
  }

  colorAt(out, value) {
    if (value <= this._stops[0]) {
      return vec4.copy(out, this._colors[0]);
    }

    if (value >= this._stops[this._stops.length-1]) {
      return vec4.copy(out, this._colors[this._stops.length-1]);
    }

    // could use a binary search here, but since most gradients
    // have a really small number of stops, that's not going to
    // help much.
    var lowerIndex = 0;

    for (var i = 1; i < this._stops.length; ++i) {
      if (this._stops[i] > value) {
        break;
      }

      lowerIndex = i;
    }

    var upperIndex = lowerIndex + 1;
    var lowerStop = this._stops[lowerIndex];
    var upperStop = this._stops[upperIndex];
    var t = (value - lowerStop)/ (upperStop - lowerStop);

    return rgb.mix(out, this._colors[upperIndex], this._colors[lowerIndex], t);
  }
}

// creates a new gradient from the given set of colors.
//
// colors must be a valid list of colors.
//
// when stops is set to 'equal' or ommitted, then the color stops are
// assumed to be equi distant on the interval 0,1. otherwise, stops
// must be  a list of floating point numbers with the same length
// than colors.
export const gradient = (colors, stops = 'equal') => {
  if (typeof colors === 'string') {
    return GRADIENTS[colors];
  }

  if (stops === 'equal') {
    stops = colors.map((color, i) => (Number(i)) / (colors.length-1));
  }

  return new Gradient(colors, stops);
};

let GRADIENTS = {
  rainbow: gradient(['blue', 'green', 'yellow', 'red']),
  reds: gradient(['lightred', 'darkred']),
  greens: gradient(['lightgreen', 'darkgreen']),
  blues: gradient(['lightblue', 'darkblue']),
  trafficlight: gradient(['green', 'yellow', 'red']),
  heatmap: gradient(['red', 'white', 'blue']),
};

export const resetGradients = () => {
  GRADIENTS = {
    rainbow: gradient(['blue', 'green', 'yellow', 'red']),
    reds: gradient(['lightred', 'darkred']),
    greens: gradient(['lightgreen', 'darkgreen']),
    blues: gradient(['lightblue', 'darkblue']),
    trafficlight: gradient(['green', 'yellow', 'red']),
    heatmap: gradient(['red', 'white', 'blue']),
  };
};

class ColorOp {
  constructor(colorFunc, beginFunc, endFunc) {
    this.colorFor = colorFunc;
    this._beginFunc = beginFunc;
    this._endFunc = endFunc;
  }

  begin(obj) {
    if (this._beginFunc) {
      this._beginFunc(obj);
    }
  }

  end(obj) {
    if (this._endFunc) {
      this._endFunc(obj);
    }
  }
}

export const uniform = (color = 'white') => {
  color = forceRGB(color);

  return new ColorOp((atom, out, index) => {
    out[index+0] = color[0];
    out[index+1] = color[1];
    out[index+2] = color[2];
    out[index+3] = color[3];
  });
};

const CPK_TABLE = {
  H:  [0.87, 0.87, 0.87],
  C:  [0.61, 0.61, 0.61],
  N:  [0.00, 0.47, 0.84],
  O:  [0.97, 0.18, 0.18],
  F:  [0.12, 0.94, 0.12],
  CL: [0.12, 0.94, 0.12],
  BR: [0.60, 0.13, 0.00],
  I:  [0.40, 0.00, 0.73],
  HE: [0.00, 1.00, 1.00],
  NE: [0.00, 1.00, 1.00],
  AR: [0.00, 1.00, 1.00],
  XE: [0.00, 1.00, 1.00],
  KR: [0.00, 1.00, 1.00],
  P:  [1.00, 0.43, 0.13],
  S:  [1.00, 0.73, 0.22],
  B:  [1.00, 0.67, 0.47],
  LI: [0.47, 0.00, 1.00],
  NA: [0.47, 0.00, 1.00],
  K:  [0.47, 0.00, 1.00],
  RB: [0.47, 0.00, 1.00],
  CS: [0.47, 0.00, 1.00],
  FR: [0.47, 0.00, 1.00],
  BE: [0.00, 0.47, 0.00],
  MG: [0.00, 0.47, 0.00],
  SR: [0.00, 0.47, 0.00],
  BA: [0.00, 0.47, 0.00],
  RA: [0.00, 0.47, 0.00],
  TI: [0.60, 0.60, 0.60],
  FE: [0.56, 0.31, 0.12]
};

export const byElement = (palette = CPK_TABLE) => {
  return new ColorOp((atom, out, index) => {
    const ele = atom.element();
    const color = palette[ele];

    if (color !== undefined) {
      out[index] = color[0];
      out[index+1] = color[1];
      out[index+2] = color[2];
      out[index+3] = 1.0;
      return out;
    }

    out[index] = 1;
    out[index+1] = 0;
    out[index+2] = 1;
    out[index+3] = 1.0;

    return out;
  });
};

export const bySS = grad => {
  let palette;

  if (grad && grad._colors) {
    palette = {
      C: grad._colors[0],
      H: grad._colors[1],
      E: grad._colors[2]
    };
  } else if (grad) {
    palette = {
      C : forceRGB(grad.C),
      H : forceRGB(grad.H),
      E : forceRGB(grad.E)
    };
  } else {
    palette = {
      C: [0.8, 0.8, 0.8, 1.0],
      H: [0.6, 0.6, 0.9, 1.0],
      E: [0.2, 0.8, 0.2, 1.0]
    };
  }

  return new ColorOp((atom, out, index) => {
    const ss = atom.residue().ss();
    const color = palette[ss];

    if (color !== undefined) {
      out[index] = color[0];
      out[index+1] = color[1];
      out[index+2] = color[2];
      out[index+3] = color[3];
    }
  });
};

export const rainbow = (grad = gradient('rainbow')) => {
  return new ColorOp((a, out, index) => {
    const limits = this.chainLimits[a.residue().chain().name()];
    const x = [1,1,1,1];

    let t = 0.0;

    if (limits !== undefined) {
      const idx = a.residue().index();

      t = (idx - limits[0]) / (limits[1]-limits[0]);
    }

    grad.colorAt(x, t);
    out[index] = x[0];
    out[index+1] = x[1];
    out[index+2] = x[2];
    out[index+3] = x[3];
  }, obj => {
    const chains = obj.chains();

    this.chainLimits = {};

    chains.forEach(chain => {
      const bbTraces = chain.backboneTraces();

      if (bbTraces.length === 0) {
        return;
      }

      let minIndex = bbTraces[0].residueAt(0).index();
      let maxIndex = bbTraces[0].residueAt(bbTraces[0].length()-1).index();

      bbTraces.forEach(trace => {
        minIndex = Math.min(minIndex, trace.residueAt(0).index());
        maxIndex = Math.max(maxIndex, trace.residueAt(trace.length()-1).index());
      });

      if (minIndex !== maxIndex) {
        this.chainLimits[chain.name()] = [minIndex, maxIndex];
      }
    });
  }, () => {
    this.chainLimits = null;
  });
};

export const ssSuccession = (grad = gradient('rainbow'), coilColor = 'lightgrey') => {
  coilColor = forceRGB(coilColor);

  return new ColorOp((a, out, index) => {
    const idx = a.residue().index();
    const limits = this.chainLimits[a.residue().chain().name()];
    const ssIndex = limits.indices[idx];
    const x = [0,0,0,0];

    let t = 0.0;

    if (ssIndex === -1) {
      out[index] = coilColor[0];
      out[index+1] = coilColor[1];
      out[index+2] = coilColor[2];
      out[index+3] = coilColor[3];
      return;
    }

    if (limits.max !== null) {
      t =  ssIndex/(limits.max > 0 ? limits.max : 1);
    }

    grad.colorAt(x, t);
    out[index] = x[0];
    out[index+1] = x[1];
    out[index+2] = x[2];
    out[index+3] = x[3];
  }, obj => {
    const chains = obj.chains();

    this.chainLimits = {};

    chains.forEach(chain => {
      const residues = chain.residues();
      const indices = {};

      let maxIndex = null;
      let lastSS = 'C';
      let ssIndex = 0;

      residues.forEach(residue => {
        const ss = residue.ss();

        if (ss === 'C') {
          if (lastSS !== 'C') {
            ssIndex++;
          }

          indices[residue.index()] = -1;
        } else {
          maxIndex = ssIndex;
          indices[residue.index()] = ssIndex;
        }

        lastSS = ss;
      });

      this.chainLimits[chain.name()] = {
        indices : indices,
        max: maxIndex
      };
    });
  }, () => {
    this.chainLimits = null;
  });
};

export const byChain = (grad = gradient('rainbow')) => {
  return new ColorOp((a, out, index) => {
    const chainIndex = this.chainIndices[a.residue().chain().name()];
    const t =  chainIndex*this.scale;
    const x = [0,0,0,0];

    grad.colorAt(x, t);
    out[index+0] = x[0];
    out[index+1] = x[1];
    out[index+2] = x[2];
    out[index+3] = x[3];
  }, (obj) => {
    const chains = obj.chains();
    this.chainIndices = {};

    chains.forEach((chain, i) => {
      this.chainIndices[chain.name()] = i;
    });

    this.scale = chains.length > 1 ? 1.0/(chains.length-1) : 1.0;
  }, () => {
    this.chainIndices = null;
  });
};

function getMinMaxRange(obj, iter, propName) {
  var min = null;
  var max = null;
  obj[iter](function(item) {
    var value = item.prop(propName);
    if (min === null && max === null) {
      min = max = value;
      return;
    }
    min = Math.min(min, value);
    max = Math.max(max, value);
  });
  return { min: min, max: max };
}

var gradColor = (function() {
  var color = vec4.create();
  return function(out, index, grad, t) {
    grad.colorAt(color, t);
    out[index+0] = color[0];
    out[index+1] = color[1];
    out[index+2] = color[2];
    out[index+3] = color[3];
  };
})();

function colorByItemProp(propName, grad = gradient('rainbow'), range, iter, item) {
  return new ColorOp(function(a, out, index) {
    var t = 0.0;
    if (this._min !== this._max) {
      t = (item(a).prop(propName) - this._min)/(this._max - this._min);
    }

    gradColor(out, index, grad, t);
  },
  function(obj) {
    if (range !== undefined) {
      this._min = range[0];
      this._max = range[1];
      return;
    }
    range = getMinMaxRange(obj, iter, propName);
    this._min = range.min;
    this._max = range.max;
  });
}

export const byAtomProp = (propName, grad, range) => {
  return colorByItemProp(propName, grad, range, 'eachAtom', a => a);
};

export const byResidueProp = (propName, grad, range) => {
  return colorByItemProp(propName, grad, range, 'eachResidue', a => a.residue());
};

// linearly interpolates the array of colors and returns it as a Float32Array
// color must be an array containing a sequence of R,G,B triples.
export const interpolateColor  = (colors, num) => {
  const out = new Float32Array((num*(colors.length/4-1) + 1)*4);
  const bf = vec4.create();
  const af = vec4.create();
  const halfNum = num/2;

  let index = 0;

  for (var i = 0; i < colors.length/4-1; ++i) {
    vec4.set(bf, colors[4*i+0], colors[4*i+1], colors[4*i+2], colors[4*i+3]);
    vec4.set(af, colors[4*i+4], colors[4*i+5], colors[4*i+6], colors[4*i+7]);
    for (var j = 0; j < num; ++j) {
      var t = j < halfNum ? 0.0 : 1.0;
      out[index+0] = bf[0]*(1-t)+af[0]*t;
      out[index+1] = bf[1]*(1-t)+af[1]*t;
      out[index+2] = bf[2]*(1-t)+af[2]*t;
      out[index+3] = bf[3]*(1-t)+af[3]*t;
      index+=4;
    }
  }

  out[index+0] = af[0];
  out[index+1] = af[1];
  out[index+2] = af[2];
  out[index+3] = af[3];

  return out;
};
