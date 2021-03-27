<script context="module">
  export function preload() {
    return this.fetch(`https://api.martinezbaratlafore.com/wp-json/wp/v2/news`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  // export let page;
  export let posts;
  export let segment;
  // import News from "../components/News.svelte";

  import { onMount } from "svelte";

  let visible;
  function handleToggle() {
    visible = !visible;
  }
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
<div class="">
  <button on:click={handleToggle}
    >Eclecticism over style. Partnership over authorship.
  </button>
</div>

<!-- <header id={segment} class="fixed b0 l0 z100 {visible ? null : 'mixblend'}">
  <h1><button on:click={handleToggle}>MBL</button></h1>
  {#if visible}
    <div
      class="fixed t0 b0 l0 r0 modal"
      style="background-color:rgb({x},{y},{z});">
      <h1 class="fixed b0 l0 z mixblend">
        <button on:click={handleToggle}>MBL</button>
      </h1>
      <button on:click={handleToggle}>×</button>
      {@html posts[0].content.rendered}
    </div>
  {/if}
</header> -->
<!-- {segment === undefined ? 'page' : undefined} -->
<header id={segment} class="fixed b0 l0 z100 mixblend">
  <h1><button on:click={handleToggle}>MBL</button></h1>
</header>

{#if visible}
  <div
    class="fixed t0 b0 l0 r0 modal"
    style="background-color:rgb({x},{y},{z});"
  >
    <button on:click={handleToggle} class="w100">MBL architectes ×</button>
    {@html posts[0].content.rendered}
  </div>
{/if}

<!-- <aside class="marquee" style="background-color:rgb({x},{y},{z});">
    <div class="flex">
      <h2>{posts[1].title.rendered}</h2>
      {@html posts[1].content.rendered}
    </div>
  </aside> -->

<!-- <aside>
    <article id="n1" class="p2 p1" style="background-color:rgb({x},{y},{z});">
      <h2 class="sm">{posts[1].title.rendered}</h2>
      {@html posts[1].content.rendered}
    </article>
    <article id="n2" class="p2 p1" style="background-color:rgb({x},{y},{z});">
      <h2 class="sm">{posts[2].title.rendered}</h2>
      {@html posts[2].content.rendered}
    </article>
    <article id="n3" class="p2 p1" style="background-color:rgb({x},{y},{z});">
      <h2 class="sm">{posts[3].title.rendered}</h2>
      {@html posts[3].content.rendered}
    </article>
    <article id="n4" class="p2 p1" style="background-color:rgb({x},{y},{z});">
      <h2 class="sm">{posts[4].title.rendered}</h2>
      {@html posts[4].content.rendered}
    </article>
  </aside> -->
<!-- {:else}
  <div />
{/if} -->
<main class={visible ? "fixed" : ""}>
  <slot />
</main>
<footer style="display:none"><a href="/pdf">pdf</a></footer>

<style>
  /* .marquee {
    display: flex;
    animation: marquee 50s linear infinite;
    overflow: hidden;
    padding-top: 0.5em;
    white-space: nowrap;
  }
  .marquee:hover {
    animation: none;
  }
  .flex {
    display: inline-flex;
    font-size: 0.5em;
  }
  .flex h2 {
    padding-left: 2em;
    padding-right: 0.5em;
  }
  .flex p {
    margin-block-end: 0;
  }
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  } */
</style>
