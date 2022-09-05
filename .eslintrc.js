module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [2,{
        semi: 0,
        singleQuote: true,
        printWidth: 100,
        bracketSpacing: true,
        tabWidth: 2,
        arrowParens: 'always',
        trailingComma: 'none'
      }],
    'linebreak-style': 0,
    quotes: 0,
    semi: 0,
      indent: 0,
    "@typescript-eslint/no-var-requires": 0,
   "no-undef": 0
  },
};
