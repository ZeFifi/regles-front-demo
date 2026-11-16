import tseslint from "typescript-eslint";
import extensionJsdoc from "eslint-plugin-jsdoc";
import commentairesEslint from "@eslint-community/eslint-plugin-eslint-comments";

export default [
  {
    ignores: ["dist/**"],
  },

  // Les commentaires de désactivation d'ESLint n'ont plus d'effet, et leur présence est une erreur.
  {
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: "error",
    },
  },

  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        Intl: "readonly",
        HTMLElement: "readonly",
        HTMLButtonElement: "readonly",
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
    },
  },

  {
    files: ["**/*.{js,ts}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@eslint-community/eslint-comments": commentairesEslint,
    },
    rules: {
      "no-console": "error",
      "@typescript-eslint/ban-ts-comment": ["error", {
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-expect-error": true,
      }],
      "@eslint-community/eslint-comments/no-use": ["error", { allow: [] }],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["react", "react-dom", "preact", "vue", "svelte", "lit", "solid-js", "@angular/*"],
              message: "Pas de framework : un composant est une fonction qui renvoie un élément du DOM.",
            },
          ],
        },
      ],
    },
  },

  {
    files: ["src/composants/**/*.js"],
    plugins: {
      jsdoc: extensionJsdoc,
    },
    rules: {
      "max-lines": ["error", { max: 200, skipBlankLines: false, skipComments: false }],
      "jsdoc/require-jsdoc": ["error", { publicOnly: true }],
      "jsdoc/require-param": "error",
      "jsdoc/require-param-type": "error",
      "jsdoc/require-returns": "error",
      "jsdoc/require-returns-type": "error",
    },
  },

  // Les exceptions passent ici, jamais dans le code.
  {
    files: ["src/legacy/**"],
    rules: {
      "no-console": "off",
    },
  },
];
