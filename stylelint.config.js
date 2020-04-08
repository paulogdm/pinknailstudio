module.exports = {
  defaultSeverity: 'error',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  rules: {
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'order/properties-alphabetical-order': true,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: 'global' }],
  },
};
