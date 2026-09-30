# @antipain/eslint-config

An opinionated, batteries-included ESLint Flat Config (ESLint v9+) for modern **TypeScript**, **JavaScript**, **Stylistic Formatting**, **JSON**, and **CSS**.

---

## Features

- **⚡ ESLint v9 Flat Config:** Native support for the modern `eslint.config.js` format.
- **🔷 TypeScript & JS:** Modern best practices powered by `typescript-eslint` and `@eslint/js`.
- **🎨 Code Style & Formatting:** Zero-Prettier setup using `@stylistic/eslint-plugin` (2 spaces, single quotes, 140 line length limit).
- **📄 Multi-Format Linting:** Built-in linting for `.json` and `.css` files via `@eslint/json` and `@eslint/css`.
- **⚛️ React Ready:** Ships pre-configured with React Hooks, React Refresh, and JSX Accessibility plugins.
- **🧩 Modular:** Use the complete bundle or pick only the specific configurations you need.

---

## Installation

Install the package alongside `eslint` as dev dependencies:

```bash
pnpm add -D @antipain/eslint-config eslint
# or
npm install -D @antipain/eslint-config eslint
# or
yarn add -D @antipain/eslint-config eslint
```

## Quick Start

Create an `eslint.config.js` file in the root of your project:

```js
// eslint.config.js
import antipainConfig from '@antipain/eslint-config';

export default [
  ...antipainConfig,

  // Add project-specific ignores or overrides below
  {
    ignores: ['dist/**', 'build/**', 'coverage/**'],
  },
];
```

## Modular Usage

If you don't need the entire suite (for example, 
if you don't want CSS or JSON linting), you can import individual configurations:

```js
// eslint.config.js
import { typescript, stylistic } from '@antipain/eslint-config';

export default [
  ...typescript,
  ...stylistic,

  // Custom project rule overrides
  {
    rules: {
      'no-console': 'off',
    },
  },
];
```

## Available Named Exports

| Export        | Files Targeted                 | Key Tools / Plugins                |
| ------------- | ------------------------------ | ---------------------------------- |
| `typescript`  | `**/*.{ts,tsx,js,jsx,mjs,cjs}` | `@typescript-eslint`, `@eslint/js` |
| `stylistic`   | `**/*.{ts,tsx,js,jsx,mjs,cjs}` | `@stylistic/eslint-plugin`         |
| `json`        | `**/*.json`                    | `@eslint/json`                     |
| `css`         | `**/*.css`                     | `@eslint/css`                      |

## Recommended `package.json` Scripts

Add these scripts to your `package.json` to run and automatically fix lint issues across your project:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Key Style Defaults

- **Indentation:** 2 spaces
- **Quotes:** Single (`'`), avoiding escapes
- **Semicolons:** Always required
- **Line Length:** 140 characters
- **Unused Variables:** Ignore variables prefixed with `_` (e.g. `_req`)

## License

[MIT](LICENSE) © [Antipain](https://github.com/antipainK)