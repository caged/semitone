import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [{
    file: 'build/semitone.es.js',
    format: 'es'
  },
  {
    file: 'build/semitone.js',
    format: 'cjs',
    exports: 'auto'
  }],
  plugins: [resolve(), json()]
};