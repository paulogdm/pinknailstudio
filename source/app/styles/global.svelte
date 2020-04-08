<style lang="scss">
  /* stylelint-disable no-descending-specificity */

  @import "styles/index";

  :global(*) {
    box-sizing: border-box;
  }

  :global(a) {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    text-align: inherit;
    text-decoration: none;
    text-transform: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  :global(address) {
    font-style: normal;
  }

  :global(body) {
    background-color: var(--colors-dark-grey);
    color: var(--colors-black);
    font-family: var(--font-family);
    font-size: 1.6rem;
    line-height: 1.375;
    margin: 0;
  }

  :global(button) {
    background-color: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: 0;
    text-align: inherit;
    text-decoration: inherit;
    text-transform: inherit;
  }

  :global(html) {
    font-size: 62.5%;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-size: 1.6rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  :global(ol) {
    list-style-type: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
  }

  :global(p) {
    margin-bottom: 0;
    margin-top: 0;
  }

  :global(ul) {
    list-style-type: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
  }
</style>
