module.exports = {
    arrowParens: 'always',
    printWidth: 100,
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
  
    importOrder: [
      '^react$',
      '^next(/.*)?$',
      '^@[^/]*$',
      '^@zods/(.*)$',
      '^~/(.*)$',
      '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: [
      require.resolve('@trivago/prettier-plugin-sort-imports'),
      require.resolve('prettier-plugin-tailwindcss'),
    ],
  };
  