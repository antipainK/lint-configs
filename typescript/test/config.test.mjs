/* eslint-disable no-useless-escape */
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {ESLint} from 'eslint';
import {css, json, typescript, stylistic} from "../src/index.js"

async function lintFix(config, code, filepath) {
    const eslint = new ESLint({fix: true, overrideConfig: config, overrideConfigFile: true});
    const [result] = await eslint.lintText(code, {filePath: filepath});
    return result.output ?? code;
}

async function lint(config, code, filepath) {
    const eslint = new ESLint({overrideConfig: config, overrideConfigFile: true});
    const [result] = await eslint.lintText(code, {filePath: filepath});
    return result.messages;
}

// CSS Configuration Test
test('CSS configuration fixes invalid CSS', async () => {
    const code = 'div { color: red; }';
    const result = await lintFix(css, code, 'test.css');
    assert.ok(result.includes('div { color: red; }'));
});

// JSON Configuration Test
test('JSON configuration fixes invalid JSON', async () => {
    const code = '{"name": "test", "age": 30}';
    const result = await lintFix(json, code, 'test.json');
    assert.ok(result.includes('{\n  \"name\": \"test\",\n  \"age\": 30\n}'));
});

// TypeScript Configuration Test
test('TypeScript configuration catches unused variables', async () => {
    const code = 'const x = 42; function test() { return y; }';
    const messages = await lint(typescript, code, 'test.ts');
    const hasUnusedVar = messages.some(msg => msg.ruleId === '@typescript-eslint/no-unused-vars');
    assert.ok(hasUnusedVar);
});

test('TypeScript configuration catches ban-ts-comment', async () => {
    const code = '// @ts-ignore\nconst x: string = 42;';
    const messages = await lint(typescript, code, 'test.ts');
    const hasBanTsComment = messages.some(msg => msg.ruleId === '@typescript-eslint/ban-ts-comment');
    assert.ok(hasBanTsComment);
});

// Stylistic Configuration Test
test('Stylistic configuration fixes code style', async () => {
    const code = 'const x=42;';
    const result = await lintFix(stylistic, code, 'test.js');
    assert.ok(result.includes('const x = 42;'));
});

test('Stylistic configuration catches semicolon usage', async () => {
    const code = 'const x = 42\nconst y = 43';
    const messages = await lint(stylistic, code, 'test.js');
    const hasSemiError = messages.some(msg => msg.ruleId === '@stylistic/semi');
    assert.ok(hasSemiError);
});