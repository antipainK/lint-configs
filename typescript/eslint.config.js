import { css, json, stylistic, typescript } from './src/index.js';
import globals from 'globals';

export default [
  { ignores: [ 'node_modules' ]},
  ...typescript,
  ...json,
  ...stylistic,
  ...css,
  {
    files: [ '**/*.{js,mjs}' ],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-console': 'off',
    },
  },
];
