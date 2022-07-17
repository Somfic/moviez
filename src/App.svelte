<script lang="ts">
  import { onMount } from "svelte";
  import { default as ShowingComponent } from "./components/Showing.svelte";

  import { fetchShowings } from "./scripts/api";
  import { MediaType, Showing } from "./scripts/models/movies";

  let showings: Showing[] | undefined;
  let selectedShowing: Showing | undefined;

  onMount(async () => {
    showings = await fetchShowings();
  });

  function selected(showing: Showing | undefined) {
    selectedShowing = showing;
  }
</script>

<main>
  {#if showings == undefined}
    <div class="loading">
      <p>Loading</p>
    </div>
  {:else}
    {#each showings as showing}
      <div class="background">
        <img
          src={"https://cdn.kinepolis.nl/images" +
            showing.film.images.find((i) => i.mediaType == MediaType.Still).url}
          class={selectedShowing == showing ? "active" : ""}
          alt=""
        />
      </div>
    {/each}
    <div class="showings" on:mouseleave={() => selected(undefined)}>
      {#each showings as showing}
        <div class="showing" on:mouseenter={() => selected(showing)}>
          <ShowingComponent {showing} />
        </div>
      {/each}
    </div>
  {/if}
</main>

<style lang="scss">
  main {
    display: flex;
    align-items: center;
    position: relative;

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        width: 100%;
        opacity: 0;
        transition: 500ms ease;

        &.active {
          opacity: 1;
        }
      }
    }

    .showings {
      display: flex;
      align-items: center;
      overflow-x: scroll;
      padding: 2rem;
      height: 100%;

      .showing {
        margin-right: -8rem;
        transition: 200ms ease;

        &:hover {
          transform: translateY(-1rem);
          padding-right: 1rem;
        }

        &:hover ~ .showing {
          transform: translateX(8rem);
        }
      }
    }
  }
</style>
