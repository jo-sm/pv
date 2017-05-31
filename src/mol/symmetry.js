// a list of rotation/translation operators to be applied to certain chains,
// typically of the asymmetric unit.

export class SymGenerator {
  constructor(chains, matrices) {
    this._chains = chains || [];
    this._matrices = matrices || [];
  }

  addChain(name) {
    this._chains.push(name);
  }

  chains() {
    return this._chains;
  }

  addMatrix(matrix) {
    this._matrices.push(matrix);
  }

  matrices() {
    return this._matrices;
  }

  matrix(index) {
    return this._matrices[index];
  }
}

// contains the definition for how to construct a biological assembly from
// an asymmetric unit. Essentially a list of rotation/translation operators
// to be applied to chains of the asymmetric unit.
export class Assembly {
  constructor(name) {
    this._name = name;
    this._generators = [];
  }

  name() {
    return this._name;
  }

  generators() {
    return this._generators;
  }

  generator(index) {
    return this._generators[index];
  }

  addGenerator(gen) {
    this._generators.push(gen);
  }
}
