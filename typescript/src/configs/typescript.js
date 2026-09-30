import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
  ],
  files: [ '**/*.{ts,tsx,js,jsx,mjs,cjs}' ],
  linterOptions: {
    reportUnusedInlineConfigs: 'error',
    reportUnusedDisableDirectives: 'error',
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-unused-vars': [ 'error', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    } ],
    'class-methods-use-this': [ 'warn', { enforceForClassFields: false, ignoreOverrideMethods: true } ],
    'curly': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'eqeqeq': [ 'error', 'smart' ],
    'no-await-in-loop': 'warn',
    'no-console': 'warn',
    'no-constructor-return': 'warn',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-implicit-coercion': 'warn',
    'no-param-reassign': [ 'error', { props: false } ],
    'no-promise-executor-return': 'error',
    'no-self-compare': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-const': [ 'error', { destructuring: 'all' } ],
    'prefer-template': 'warn',
  },
});
