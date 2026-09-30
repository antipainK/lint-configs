import tseslint from "typescript-eslint"
import js from "@eslint/js"

export default tseslint.config({
    extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
    ],
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    linterOptions: {
        reportUnusedInlineConfigs: "error"
    },
    rules: {
        "@typescript-eslint/ban-ts-comment": "error"
    }
})