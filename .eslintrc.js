module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    "no-console": "error",
    "no-return-await": "error",
    eqeqeq: "error",
    "guard-for-in": "error",
    "max-classes-per-file": "error",
    "no-else-return": "error",
    "no-unneeded-ternary": "error",
    "prefer-template": "error",
    "no-shadow": "off",

    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/unbound-method": "off",

    "react/display-name": "off",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-no-bind": [
      "warn",
      { ignoreRefs: true, allowArrowFunctions: true, allowBind: false },
    ],
    "react/no-unescaped-entities": "off",
    "react/no-unsafe": ["error", { checkAliases: true }],
    "react/prop-types": "off",
    "react/self-closing-comp": "error",

    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
