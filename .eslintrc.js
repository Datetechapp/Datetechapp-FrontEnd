module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    //'airbnb',
    //'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    //'plugin:prettier/recommended',*/
    'eslint:recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    semi: [2, 'always'],
    'max-len': [
      'warn',
      { code: 120, ignorePattern: '^import\\s.+\\sfrom\\s.+;$' },
    ],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }],
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'import/extensions': 'off',
    //'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'max-lines-per-function': ['warn', 40],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'for', 'while', 'switch'],
      },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['export', 'const', 'let'],
      },
    ],
  },
};
