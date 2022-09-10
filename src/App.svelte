<script lang="ts">
    import { size } from "./scripts/store";
    import { onMount } from "svelte";
    import { default as ShowingComponent } from "./components/Showing.svelte";
    import { fetchShowings } from "./scripts/api";
    import { Models } from "./scripts/models";
    import Responsive from "./components/Responsive.svelte";
    import Button from "./components/Button.svelte";

    let showings: Models.Showing[] | undefined;
    let selectedShowing: Models.Showing | undefined;
    let selectedIndex: number | undefined;

    onMount(async () => {
        showings = await fetchShowings();
    });

    function selected(showing: Models.Showing | undefined) {
        selectedShowing = showing;
        selectedIndex = -1;
    }

    function randomize() {
        const amountOfTicks = Math.floor(Math.random() * 50) + 20;

        for (let count = 0; count < amountOfTicks; count++) {
            setTimeout(() => {
                selectedIndex += 1;
                if (selectedIndex > showings.length - 1) {
                    selectedIndex = 0;
                }

                console.log(selectedIndex);
            }, 2000 * Math.pow(count * 0.02, -0.4) - 3000);
        }
    }
</script>

<Responsive />

<main>
    {#if showings == undefined}
        <div class="message">
            <p>Loading ...</p>
        </div>
    {:else}
        {#each showings as showing}
            <div class="background">
                <img src={"https://cdn.kinepolis.nl/images" + showing.film.images.find((i) => i.mediaType == Models.MediaType.Still).url} class={selectedShowing == showing ? "active" : ""} alt="" />
            </div>
        {/each}
        {#if showings.length == 0}
            <div class="message">
                <p>Check back tomorrow!</p>
            </div>
        {:else}
            <div class={"button-wrapper " + $size}>
                <Button on:randomize={() => randomize()} />
            </div>
        {/if}
        <div class={"showings " + $size} on:mouseleave={() => selected(undefined)}>
            {#each showings as showing}
                <div class={"showing " + (showings[selectedIndex] == showing ? "randomizer " : selectedIndex != -1 ? "randomizer-not" : "")} on:mouseenter={() => selected(showing)}>
                    <ShowingComponent {showing} isPicked={showings[selectedIndex] == showing} />
                </div>
            {/each}
        </div>
    {/if}
</main>

<style lang="scss">
    @import "../src/styles/theme.scss";

    main {
        display: flex;
        align-items: center;
        position: relative;

        .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;

            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            img {
                flex-shrink: 0;
                min-width: 100%;
                min-height: 100%;
                opacity: 0;
                transition: 500ms ease;

                &.active {
                    opacity: 1;
                }
            }
        }

        .message {
            width: 100vw;
            text-align: center;
            color: $muted;
            font-size: 4rem;
        }

        .showings {
            display: flex;
            align-items: center;
            overflow-x: scroll;
            padding: 2rem;
            height: 100%;

            &.xs {
                flex-direction: column;
                padding: 1rem 0.5rem;
                gap: 1rem;
            }

            &.s {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }

            .showing {
                transition: 200ms ease;
            }

            &.m,
            &.l,
            &.xl {
                .showing:hover {
                    transform: translateY(-1rem);
                    padding-right: 1rem;
                }

                .showing.randomizer {
                    transform: translateY(-40px);
                }
            }

            &.m .showing {
                margin-right: -6rem;

                &:hover ~ .showing {
                    transform: translateX(6rem);
                }
            }

            &.l .showing {
                margin-right: -8rem;

                &:hover ~ .showing {
                    transform: translateX(8rem);
                }
            }

            &.xl .showing {
                margin-right: -10rem;

                &:hover ~ .showing {
                    transform: translateX(10rem);
                }
            }
        }
    }

    .button-wrapper {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;

        &.xl,
        &.l,
        &.m {
            bottom: 3rem;
            right: 3rem;
        }

        &.s,
        &.xs {
            width: 100vw;
            bottom: 3rem;
        }
    }
</style>
