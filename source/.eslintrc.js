module.exports = {
  env: {
    browser: true,
  },
  extends: ['../.eslintrc.js'],
  overrides: [
    {
      files: '*.svelte',
      processor: 'svelte3/svelte3',
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  rules: {
    'import/first': 'off', // https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md#eslint-plugin-import
    'import/no-mutable-exports': 'off', // ☝️
    'import/order': 'off', // ☝️
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2 }], // https://github.com/sveltejs/eslint-plugin-svelte3/issues/41
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.client.js',
      },
    },
    'svelte3/ignore-styles': () => true,
  },
};
