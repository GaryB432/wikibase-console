import js from "@eslint/js";
import gb from "eslint-plugin-gb";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js, gb },
    extends: ["js/recommended", "gb/flat/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    ignores: ["coverage", "dist", "node_modules"],
  },
]);
