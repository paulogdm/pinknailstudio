<footer class="footer">
  <small class="copyright">
    © {year} Pink Nail Studio
  </small>

  <div>
    <address>
      {store.street}
      <span class="divider">|</span>
      {store.city},
      {store.state}
      {store.zip}
    </address>

    <a class="phone" href="tel:{store.phone}">
      {store.phone}
    </a>
  </div>
</footer>

<style lang="scss">
  @import 'styles/index';

  .footer {
    align-items: flex-start;
    background-color: var(--colors-pink);
    color: var(--colors-white);
    display: flex;
    justify-content: space-between;
    line-height: 1.375;
    padding-bottom: 28px;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 44px;

    @include breakpoint(s) {
      display: grid;
      font-size: 1.2rem;
      grid-gap: 16px;
      justify-content: center;
      padding: 18px;
      text-align: center;
    }
  }

  .copyright {
    font-size: 1.6rem;

    @include breakpoint(s) {
      font-size: 1.2rem;
      order: 1;
    }
  }

  .divider {
    --padding-horizontal: 8px;

    padding-left: var(--padding-horizontal);
    padding-right: var(--padding-horizontal);
  }

  .phone {
    color: var(--colors-white);
  }
</style>

<script>
  import { getContext } from 'svelte';

  const year = new Date().getFullYear();
  const store = getContext('store');
</script>
