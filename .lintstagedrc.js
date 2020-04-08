module.exports = {
  '*.{scss,svelte}': [
    'stylelint --fix',
  ],
  '*.{svelte,js}': [
    'eslint --fix',
  ],
};
