<script context="module">
  export function preload() {
    return this.fetch(`https://api.mbl.archi/wp-json/wp/v2/pages`)
      .then((r) => r.json())
      .then((pages) => {
        return { pages };
      });
  }
</script>

<script>
  export let pages;
  export let segment;
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

{#if segment === "fr"}
  <Header {x} {y} {z}>
    {#each pages as page}
      {#if page.slug === "info-fr"} {@html page.content.rendered} {/if}
    {/each}
  </Header>
{:else}
  <Header {x} {y} {z}>
    {#each pages as page}
      {#if page.slug === "info"} {@html page.content.rendered} {/if}
    {/each}
  </Header>
{/if}

<main class="pt">
  <slot />
</main>
