<div
  bind:this={references.dialog}
  class="dialog"
  on:click={close}
  transition:backgroundColor>

  <div class="content" transition:scale="{{ duration, start: 0.9 }}">
    <slot></slot>

    <button bind:this={references.close} class="close" type="button">
      Close
    </button>
  </div>
</div>

<style lang="scss">
  @import "styles/index";

  .dialog {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    display: none;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100vw;

    @include breakpoint(s) {
      display: block;
    }
  }

  .content {
    align-content: center;
    align-items: center;
    background-color: var(--colors-white);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    max-width: 300px;
    padding: 27px;
    position: absolute;
    text-align: center;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 77vw;
  }

  .close {
    color: var(--colors-pink);
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 22px;
    text-transform: uppercase;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  import { scale } from 'svelte/transition';

  const dispatch = createEventDispatcher();
  const duration = 200;
  const references = {};

  function close(event) {
    if (event.target !== references.close && event.target !== references.dialog) {
      return;
    }

    dispatch('close');
  }

  function backgroundColor() {
    return {
      duration,
      css(t) {
        return `background-color: rgba(0, 0, 0, ${0.5 * t})`;
      },
    };
  }
</script>
