{#if !isError}
  <div class="container">
    <div class="map" bind:this={references.map}></div>

    <a href="https://goo.gl/m8jkRz">
      <img alt="See inside the store" class="thumbnail" src="{images.carousel[0]}">
    </a>
  </div>
{/if}

<style lang="scss">
  @import 'styles/index';

  .container {
    position: relative;
  }

  .map {
    height: 488px;

    @include breakpoint(s) {
      height: 368px;
    }
  }

  .thumbnail {
    box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20%;
  }
</style>

<script>
  import { onMount, getContext } from 'svelte';
  import throttle from 'lodash-es/throttle';

  const images = getContext('images');
  const references = {};
  const store = getContext('store');

  let geocoder;
  let isError;

  onMount(() => {
    if (window.google) {
      geocoder = new window.google.maps.Geocoder();
      loadMap();
    } else {
      isError = true;
    }
  });

  function loadMap() {
    geocoder.geocode({
      location: {
        lat: store.location.lat,
        lng: store.location.lon,
      },
    }, (results, status) => {
      if (status !== window.google.maps.GeocoderStatus.OK) {
        isError = true;
        return;
      }

      const map = new window.google.maps.Map(references.map, {
        center: results[0].geometry.location,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        zoom: 17,
      });

      window.google.maps.event.addListenerOnce(map, 'idle', () => {
        const throttled = throttle(() => {
          const { height, top } = references.map.getBoundingClientRect();
          const isCompletelyVisible = top > 0 && top < window.innerHeight - height;

          if (!isCompletelyVisible) {
            return;
          }

          // eslint-disable-next-line no-new
          new window.google.maps.Marker({
            map,
            animation: window.google.maps.Animation.DROP,
            position: results[0].geometry.location,
          });

          window.removeEventListener('scroll', throttled);
          return true;
        }, 250);

        const isPinDropped = throttled();

        if (!isPinDropped) {
          window.addEventListener('scroll', throttled);
        }
      });
    });
  }
</script>
