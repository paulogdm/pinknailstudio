<header class="header">
  <h1 class="heading">Pink Nail Studio</h1>
  <img alt="" class="logo" src="{images.logo}">

  <p class="call-to-book">
    Call to book at

    <a href="tel:{store.phone}">
      {store.phone}
    </a>
  </p>
</header>

<style lang="scss">
  @import 'styles/index';

  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 46px 74px;

    @include breakpoint(s) {
      justify-content: center;
      padding-bottom: 16px;
      padding-top: 16px;
    }
  }

  .heading {
    @include offscreen();
  }

  .call-to-book {
    margin-top: auto;
    text-transform: uppercase;

    @include breakpoint(m) {
      display: none;
    }
  }

  .logo {
    --height: 88px;

    height: var(--height);

    @include breakpoint(s) {
      --height: 56px;
    }
  }
</style>

<script>
  import { getContext } from 'svelte';

  const images = getContext('images');
  const store = getContext('store');
</script>
