
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ESLint } from 'eslint';
import { css, json, stylistic, typescript } from '../src/index.js';

async function lintFix(config, code, filename) {
  const eslint = new ESLint({ fix: true, overrideConfig: config, overrideConfigFile: true });
  const [ lintResult ] = await eslint.lintText(code, { filePath: filename });

  return lintResult.output ?? code;
}

async function lint(config, code, filename) {
  const eslint = new ESLint({ overrideConfig: config, overrideConfigFile: true });
  const [ lintResult ] = await eslint.lintText(code, { filePath: filename });

  return lintResult.messages;
}

// CSS Configuration Test
test('CSS configuration finds invalid CSS', async () => {
  const code = 'a {font-family: Arial;}';

  const result = await lint(css, code, 'test-styles.css');

  const hasFallbackFontComment = result.some((msg) => msg.ruleId === 'css/font-family-fallbacks');

  assert.ok(hasFallbackFontComment);
});

// JSON Configuration Test
test('JSON configuration finds invalid JSON', async () => {
  const code = '{"name": "test", "name": "George"}';

  const result = await lint(json, code, 'test.json');

  const hasDuplicateKeyComment = result.some((msg) => msg.ruleId === 'json/no-duplicate-keys');

  assert.ok(hasDuplicateKeyComment);
});

// TypeScript Configuration Test
test('TypeScript configuration finds unused variables', async () => {
  const code = 'const x = 42; function test() { return y; }';

  const result = await lint(typescript, code, 'test.ts');

  const hasUnusedVar = result.some((msg) => msg.ruleId === '@typescript-eslint/no-unused-vars');

  assert.ok(hasUnusedVar);
});

// Stylistic Configuration Test
test('Stylistic configuration fixes code style', async () => {
  const code = 'const x=42;';
  const result = await lintFix(stylistic, code, 'test.js');

  assert.ok(result.includes('const x = 42;'));
});

test('Stylistic configuration catches semicolon usage', async () => {
  const code = 'const x = 42\nconst y = 43';

  const result = await lint(stylistic, code, 'test.js');

  const hasSemiError = result.some((msg) => msg.ruleId === '@stylistic/semi');

  assert.ok(hasSemiError);
});
