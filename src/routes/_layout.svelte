<script context="module">
  export async function preload() {
    const req = await this.fetch(
      "https://api.mbl.archi/wp-json/wp/v2/pages?slug=info"
    ).then((r) => r.json());
    return { page: req[0] };
  }
</script>

<script>
  export let page;
  // export let segment;
  import Header from "../components/Header.svelte";
  import { onMount } from "svelte";

  let x;
  let y;
  let z;
  onMount(async () => {
    x = Math.floor(Math.random() * 255);
    y = Math.floor(Math.random() * 255);
    z = Math.floor(Math.random() * 255);
  });
</script>

<!-- {#if segment === undefined} -->
<Header {x} {y} {z}>
  {@html page.content.rendered}
</Header>
<!-- {/if} -->

<main class="pt">
  <slot />
</main>
