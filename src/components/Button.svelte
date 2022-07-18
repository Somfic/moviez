<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("randomize")}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style="height: 512px; width: 512px;"
    ><path
      d="M175.91 128.5a47.37 47.37 0 1 1-47.41-47.32 47.37 47.37 0 0 1 47.41 47.32zM382.5 81.18a47.37 47.37 0 1 0 47.32 47.32 47.37 47.37 0 0 0-47.32-47.32zm-254 126.95a47.37 47.37 0 1 0 47.41 47.37 47.37 47.37 0 0 0-47.41-47.37zm253.91 0a47.37 47.37 0 1 0 47.41 47.37 47.37 47.37 0 0 0-47.32-47.37zM128.5 335.09a47.37 47.37 0 1 0 47.41 47.41 47.37 47.37 0 0 0-47.41-47.41zm253.91 0a47.37 47.37 0 1 0 47.41 47.41 47.37 47.37 0 0 0-47.32-47.41zm102 92.93a56.48 56.48 0 0 1-56.39 56.48h-344a56.48 56.48 0 0 1-56.52-56.48v-344A56.48 56.48 0 0 1 83.98 27.5h344a56.48 56.48 0 0 1 56.52 56.48zm-20-344a36.48 36.48 0 0 0-36.39-36.52h-344A36.48 36.48 0 0 0 47.5 83.98v344a36.48 36.48 0 0 0 36.48 36.52h344a36.48 36.48 0 0 0 36.52-36.48z"
    />
    ></svg
  >
</button>

<style lang="scss">
  @import "../styles/theme";

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms ease;

    svg {
      max-width: 3rem;
      max-height: 3rem;

      path {
        fill: $border;
        transition: fill 200ms ease;
      }
    }

    &:hover {
      transform: translateY(-0.25rem);
      border-color: rgb(98, 140, 215);

      svg path {
        fill: rgb(98, 140, 215);
      }
    }

    &:active {
      transform: scale(0.9);
    }

    padding: 1rem;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border: 2px solid $border;
    border-radius: 1rem;
    box-shadow: 0 0 1rem transparentize($background, 0.7);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    background-color: transparentize($background-elevated, 0.28);
    font-weight: bold;

    &:hover img {
      background-color: orange;
    }
  }
</style>
