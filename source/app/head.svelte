<svelte:head>
  <meta charset="utf-8">
  <meta name="description" content="{general.description}">
  <meta name="viewport" content="initial-scale=1, width=device-width">

  <title>{general.title}</title>

  <link rel="preload" href="fonts/lato-light.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/lato-light-italic.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/lato-regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/lato-regular-italic.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/lato-bold.woff2" as="font" type="font/woff2" crossorigin>
  <link href="/client.css" rel="stylesheet">

  <script data-props="{JSON.stringify($$props)}" nonce="{nonce}">
    window.props = JSON.parse(document.currentScript.dataset.props);
  </script>

  <script src="/client.js" defer></script>
  <script src="https://maps.googleapis.com/maps/api/js?key={general.googleMapsKey}"></script>
  <script src="https://www.google-analytics.com/analytics.js" async></script>
  <script src="/analytics.js"></script>
</svelte:head>

<script>
  import { getContext } from 'svelte';

  const general = getContext('general');
  let nonce;

  export { nonce };
</script>
