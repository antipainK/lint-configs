import css from './configs/css.js';
import json from './configs/json.js';
import typescript from './configs/typescript.js';
import stylistic from './configs/stylistic.js';

export { css, json, typescript, stylistic };

export default [
  ...typescript,
  ...stylistic,
  ...json,
  ...css,
];
