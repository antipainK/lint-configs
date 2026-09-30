import stylisticPlugin from '@stylistic/eslint-plugin';

export default [
  {
    ...stylisticPlugin.configs.recommended,
    files: [ '**/*.{ts,tsx,js,jsx,mjs,cjs}' ],
  },
  {
    files: [ '**/*.{ts,tsx,js,jsx,mjs,cjs}' ],
    rules: {
      '@stylistic/array-bracket-spacing': [ 'error', 'always', { arraysInArrays: false } ],
      '@stylistic/arrow-parens': [ 'error', 'always' ],
      '@stylistic/brace-style': [ 'error', '1tbs' ],
      '@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
      '@stylistic/comma-spacing': [ 'error', { before: false, after: true } ],
      '@stylistic/indent': [ 'error', 2 ],
      '@stylistic/jsx-quotes': [ 'error', 'prefer-single' ],
      '@stylistic/max-len': [ 'warn', { code: 140, ignoreUrls: true, ignoreStrings: true } ],
      '@stylistic/no-multiple-empty-lines': [ 'error', { max: 2, maxBOF: 1, maxEOF: 1 } ],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/object-curly-spacing': [ 'error', 'always', { arraysInObjects: false, objectsInObjects: false } ],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: [ 'block', 'block-like', 'multiline-expression', 'class', 'multiline-const', 'const' ],
          next: '*',
        },
        { blankLine: 'always', prev: '*', next: [ 'multiline-expression', 'if', 'return' ]},
        { blankLine: 'any', prev: [ 'singleline-const' ], next: [ 'singleline-const' ]} ],
      '@stylistic/quotes': [ 'error', 'single', { avoidEscape: true } ],
      '@stylistic/semi': [ 'error', 'always', { omitLastInOneLineClassBody: true } ],
      'arrow-body-style': [ 'error', 'as-needed', { requireReturnForObjectLiteral: true } ],
      'sort-imports': [ 'error', { ignoreCase: true, ignoreDeclarationSort: true } ],
      'sort-keys': [ 'warn', 'asc', { caseSensitive: false, minKeys: 5 } ],
      'yoda': [ 'warn', 'never', { onlyEquality: true } ],

    },
  },
];
