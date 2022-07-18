<script lang="ts">
  import { onMount } from "svelte";
  import { size as sizeStore } from "../scripts/store";

  const s = 600;
  const m = 768;
  const l = 992;
  const xl = 1200;

  onMount(() => {
    window.addEventListener("resize", (_) => {
      compute();
    });

    compute();
  });

  function compute() {
    let width = window.innerWidth ?? 0;
    let size =
      width < s
        ? "xs"
        : width < m
        ? "s"
        : width < l
        ? "m"
        : width < xl
        ? "l"
        : "xl";

    console.log(size);

    sizeStore.set(size);
  }
</script>
