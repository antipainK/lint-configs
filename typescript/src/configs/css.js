import cssPlugin from '@eslint/css';

export default [
  {
    files: [ '**/*.css' ],
    language: 'css/css',
    plugins: {
      css: cssPlugin,
    },
    rules: {
      'css/no-duplicate-imports': 'error',
      'css/no-empty-blocks': 'error',
    },
  },
];
