<section class="store">
  <h2 class="heading-primary">
    The Studio
  </h2>

  <div class="details">
    <div class="column">
      <h3 class="heading-secondary">Location</h3>

      <address>
        <p>{store.street}</p>
        <p>{store.city}, {store.state} {store.zip}</p>
      </address>

      <div>
        <span class="call-to-book">
          Call to book at:
        </span>

        <a class="phone" href="tel:{store.phone}">
          {store.phone}
        </a>
      </div>
    </div>

    <div class="column">
      <h3 class="heading-secondary">Hours</h3>

      {#each store.hours as { days, hours }}
        <div>
          <p class="days">{days}</p>
          <p>{hours}</p>
        </div>
      {/each}
    </div>
  </div>

  <a class="call-us" href="tel:{store.phone}">
    Call Us
  </a>
</section>

<style lang="scss">
  @import 'styles/index';

  .store {
    --padding-vertical: 72px;

    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: var(--padding-vertical);
    padding-top: var(--padding-vertical);

    @include breakpoint(s) {
      --padding-vertical: 32px;
    }
  }

  .heading-primary {
    font-size: 3rem;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;

    @include breakpoint(s) {
      font-size: 1.6rem;
    }
  }

  .details {
    align-items: flex-start;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 90px;
    justify-content: center;
    margin-top: 60px;

    @include breakpoint(s) {
      font-size: 1.2rem;
      grid-gap: 30px;
      margin-top: 32px;
    }
  }

  .column {
    display: grid;
    grid-gap: 24px;
    text-align: center;

    @include breakpoint(m) {
      grid-gap: 12px;
    }
  }

  .heading-secondary {
    color: var(--colors-pink);
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;

    @include breakpoint(s) {
      font-size: 1.2rem;
    }
  }

  .call-to-book {
    display: block;
    font-weight: 700;
  }

  .call-us {
    display: none;

    @include breakpoint(s) {
      background-color: var(--colors-pink);
      border-radius: 2px;
      color: var(--colors-white);
      display: inline-block;
      font-size: 1rem;
      font-weight: 700;
      margin-top: 36px;
      padding: 10px 20px;
      text-transform: uppercase;
    }
  }

  .days {
    font-weight: 700;
  }
</style>

<script>
  import { getContext } from 'svelte';

  const store = getContext('store');
</script>
