import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next";
import { defineConfig } from "eslint/config";
//import 18next from 'eslint-plugin-i18next'

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  i18next.configs["flat/recommended"],
    {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-deprecated": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      // "i18next/no-literal-string": ["error", { markupOnly: true }], // или 'error',
       //"i18next/no-literal-string": 2,
    },
  },
]);
