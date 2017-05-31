import { vec3 } from '@mapbox/gl-matrix';

export function Bond(atom_a, atom_b) {
  var self = {
    atom_one : atom_a,
    atom_two : atom_b
  };

  return {
    atom_one() {
      return self.atom_one;
    },

    atom_two() {
      return self.atom_two;
    },

    // calculates the mid-point between the two atom positions
    mid_point(out = vec3.create()) {
      vec3.add(out, self.atom_one.pos(), self.atom_two.pos());
      vec3.scale(out, out, 0.5);

      return out;
    }
  };
}
