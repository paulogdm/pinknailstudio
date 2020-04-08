import App from 'app';

// eslint-disable-next-line no-new
new App({
  hydrate: true,
  props: window.props,
  target: document.querySelector('body'),
});
