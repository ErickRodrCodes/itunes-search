module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    "@typescript-eslint",
    "prettier",
    "eslint-plugin-import-helpers",
    "modules-newline",
    "import",
    "jest",
    "promise",
    "standard",
  ],
  extends: [
    "eslint:recommended", // this has to go first
    'plugin:@typescript-eslint/recommended',
    'prettier',
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/all",
    "plugin:promise/recommended",
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Special ESLint rules or overrides go here.
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-interface": [
        "error",
        {
          "allowSingleExtends": true
        }
    ],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        "arrays": "only-multiline",
        "objects": "only-multiline",
        "imports": "only-multiline",
        "exports": "only-multiline",
        "functions": "never"
      }
    ],
    "global-require": "off",
    "import-helpers/order-imports": [
      "error",
      {
        "alphabetize": {
          "ignoreCase": true,
          "order": "asc"
        },
        "groups": [
          "module",
          [
            "parent",
            "sibling",
            "index"
          ]
        ],
        "newlinesBetween": "always"
      }
    ],
    "max-len": [
      "error",
      {
        "code": 130
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "semi": "error",
    "no-empty-function": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-console": "warn",
    "no-unsafe-optional-chaining": "error",
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "array-bracket-spacing": [
      "error",
      "always",
      {
        "objectsInArrays": false
      }
    ],
    "array-element-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 3
      }
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true
      }
    ],
    "import/prefer-default-export": "off",
    "no-debugger": "warn",
    "operator-linebreak": [
      "error",
      "before"
    ],
    "import/prefer-default-export": "off",
    "no-debugger": "warn",
    "operator-linebreak": [
      "error",
      "before"
    ],
    "object-curly-newline": [
      2,
      {
        "ObjectExpression": {
          "multiline": true
        },
        "ObjectPattern": {
          "multiline": true
        },
        "ExportDeclaration": {
          "multiline": true
        },
        "ImportDeclaration": {
          "multiline": true
        }
      }
    ],
    "modules-newline/export-declaration-newline": 2,
    "modules-newline/import-declaration-newline": 2,
  },
}
