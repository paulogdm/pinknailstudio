module.exports = {
  env: {
    node: true,
  },
  extends: ['airbnb-base'],
  ignorePatterns: [
    'public',
    'node_modules',
    '!.*',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'consistent-return': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
  },
};
