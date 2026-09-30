import jsonPlugin from '@eslint/json';

export default [
  {
    files: [ '**/*.json' ],
    ignores: [ '**/coverage/**' ],
    language: 'json/jsonc',
    plugins: {
      json: jsonPlugin,
    },
    rules: {
      'json/no-empty-keys': 'error',


      'json/no-unnormalized-keys': 'error',
      'json/no-unsafe-values': 'error',
      'json/no-duplicate-keys': 'error',
    },
  },
];
