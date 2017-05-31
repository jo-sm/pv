const nodeResolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

export default {
  entry: 'src/index.js',
  plugins: [
    nodeResolve({
      main: true,
      jsnext: true,
      module: true
    }),
    babel()
  ],
  format: 'umd',
  dest: 'mlvw.js',
  moduleName: 'mlvw'
};
