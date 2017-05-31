import { vec3 } from '@mapbox/gl-matrix';

var zhangSkolnickSS = function(trace, i, distances, delta) {
  var posOne = vec3.create();
  var posTwo = vec3.create();
  for (var j = Math.max(0, i-2); j <= i; ++j) {
    for (var k = 2;  k < 5; ++k) {
      if (j+k >= trace.length()) {
        continue;
      }
      var d = vec3.dist(trace.posAt(posOne, j),
                        trace.posAt(posTwo, j+k));
      if (Math.abs(d - distances[k-2]) > delta) {
        return false;
      }
    }
  }
  return true;
};

var isHelical = function(trace, i) {
  var helixDistances = [5.45, 5.18, 6.37];
  var helixDelta = 2.1;
  return zhangSkolnickSS(trace, i, helixDistances, helixDelta);
};

var isSheet = function(trace, i) {
  var sheetDistances = [6.1, 10.4, 13.0];
  var sheetDelta = 1.42;
  return zhangSkolnickSS(trace, i, sheetDistances, sheetDelta);
};

function traceAssignHelixSheet(trace) {
  for (var i = 0; i < trace.length(); ++i) {
    if (isHelical(trace, i)) {
      trace.residueAt(i).setSS('H');
      continue;
    }
    if (isSheet(trace, i)) {
      trace.residueAt(i).setSS('E');
      continue;
    }
    trace.residueAt(i).setSS('C');
  }
}


// assigns secondary structure information based on a simple and very fast
// algorithm published by Zhang and Skolnick in their TM-align paper.
// Reference:
//
// TM-align: a protein structure alignment algorithm based on the Tm-sutils
// (2005) NAR, 33(7) 2302-2309
export function assignHelixSheet(structure) {
  console.time('mol.assignHelixSheet');
  var chains = structure.chains();
  for (var ci = 0; ci < chains.length; ++ci) {
    var chain = chains[ci];
    chain.eachBackboneTrace(traceAssignHelixSheet);
  }
  console.timeEnd('mol.assignHelixSheet');
}
