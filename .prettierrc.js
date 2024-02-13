module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: false,
      },
    },
  ],
  endOfLine: 'auto',
};
