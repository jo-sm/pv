import { Viewer, isWebGLSupported } from './viewer';
import * as io from './io';
import * as traj from './traj';
import * as color from './color';
import * as viewpoint from './viewpoint';
import { Mol, MolView } from './mol/mol';
import { assignHelixSheet } from './mol/utils';
import { superpose, matchResiduesByIndex, matchResiduesByNum } from './mol/superpose';

import { vec3, vec4, mat3, mat4, quat } from '@mapbox/gl-matrix';

export default {
  Viewer,
  isWebGLSupported,
  io,
  traj,
  color,
  mol: {
    Mol,
    MolView,
    assignHelixSheet,
    superpose,
    matchResiduesByNum,
    matchResiduesByIndex
  },
  vec3,
  vec4,
  mat3,
  mat4,
  quat,
  viewpoint
};
