const prettierConfig = require('./prettier.config')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'linebreak-style': ['error', 'windows'],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'error',
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
}
