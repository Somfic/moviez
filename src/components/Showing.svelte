<script lang="ts">
  import { MediaType, Showing } from "../scripts/models/movies";
  export let showing: Showing;
  const cdn = "https://cdn.kinepolis.nl/images";

  const pad = (num, size) => String(num).padStart(size, "0");
</script>

<div class="showing">
  <p class="title">
    <span class="name">{showing.film.title}</span>
  </p>
  <div class="poster">
    <img
      src={cdn +
        showing.film.images.find((i) => i.mediaType == MediaType.PosterGraphic)
          .url}
      alt=""
    />
  </div>
  <div class="info">
    <div class="sessions">
      {#each showing.sessions as session}
        <p class="time info-item">
          {pad(session.showtime.getHours(), 2)}:{pad(
            session.showtime.getMinutes(),
            2
          )}
        </p>
      {/each}
    </div>
    <p class="language info-item">{showing.film.audioLanguage}</p>
  </div>
</div>

<style lang="scss">
  @import "../styles/theme.scss";

  .showing {
    border: 1px solid $border;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    background-color: transparentize($background-elevated, 0.28);
    z-index: 10;
    color: $foreground;
    min-width: 380px;
    box-shadow: -1rem 0 3rem transparentize($background, 0.7);

    .title {
      margin: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 1.5rem;

      .name {
        font-weight: bold;
        font-size: 1.2rem;
      }
    }

    .poster {
      margin: 0rem 0.5rem;

      img {
        padding: 2px;
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
      }
    }

    .info {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 1rem;

      .sessions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .info-item {
        background-color: transparentize($background, 0.5);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        color: $secondary;
        //border: 1px solid $border;
        font-size: 1rem;
      }
    }
  }
</style>
