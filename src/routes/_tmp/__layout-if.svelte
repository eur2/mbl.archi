<script context="module">
  export async function preload() {
    const req = await this.fetch(
      "https://api.martinezbaratlafore.com/wp-json/wp/v2/pages?slug=info"
    ).then((r) => r.json());
    return { page: req[0] };
  }
</script>

<script>
  export let page;
  export let segment;
  import { onMount } from "svelte";

  // let visible;
  // function handleToggle() {
  //   visible = !visible;
  // }
  let x;
  let y;
  let z;
  onMount(async () => {
    x = Math.floor(Math.random() * 255);
    y = Math.floor(Math.random() * 255);
    z = Math.floor(Math.random() * 255);
  });
</script>

{#if segment === undefined}
  <div
    class="absolute t0 l0 r0 p text-center z100"
    style="background-color:rgb({x},{y},{z});"
  >
    <a href="#info">MBL architectes</a>
  </div>
  <header id={segment}>
    <div class="fixed t0 w100 z10 mixblend text-center p">
      <h1><a href="#info">MBL architectes</a></h1>
    </div>
    <div id="info" style="background-color:rgb({x},{y},{z});">
      <div
        class="w100 p text-center"
        style="background-color:rgb({x},{y},{z});"
      >
        <a href="/#">× MBL architectes</a>
      </div>
      <div class="content">
        {@html page.content.rendered}
      </div>
    </div>
  </header>
{/if}
{#if segment === "pdf"}
  <div
    class="w100 sm p text-center z10"
    style="background-color:rgb({x},{y},{z});"
  >
    <a href="/pdf#info">Eclecticism over style. Partnership over authorship.</a>
  </div>
  <header id={segment} class="fixed b0 w100 mixblend text-center">
    <h1><a href="/pdf#info">MBL architectes</a></h1>
  </header>
  <div id="info" style="background-color:rgb({x},{y},{z});">
    <div class="w100 p text-center" style="background-color:rgb({x},{y},{z});">
      <a href="/pdf#">Eclecticism over style. Partnership over authorship.</a>
    </div>

    <h1 class="fixed b0 w100 z10 mixblend text-center xl">
      <a href={`${segment}#`}>MBL architectes</a>
    </h1>
    <div class="content">
      {@html page.content.rendered}
    </div>
  </div>
{/if}
{#if segment === "grid"}
  <div
    class="w100 sm p text-center z10"
    style="background-color:rgb({x},{y},{z});"
  >
    <a href="/pdf#info">Eclecticism over style. Partnership over authorship.</a>
  </div>
  <header id={segment} class="fixed b0 w100 mixblend text-center">
    <h1 class="xl"><a href="/pdf#info">MBL architectes</a></h1>
  </header>
  <div id="info" style="background-color:rgb({x},{y},{z});">
    <div class="w100 p text-center" style="background-color:rgb({x},{y},{z});">
      <a href="/pdf#">Eclecticism over style. Partnership over authorship.</a>
    </div>

    <h1 class="fixed b0 w100 z10 mixblend text-center">
      <a href={`${segment}#`}>MBL architectes</a>
    </h1>
    <div class="content">
      {@html page.content.rendered}
    </div>
  </div>
{/if}
{#if segment === "slide"}
  <div
    class="w100 sm p text-center z10"
    style="background-color:rgb({x},{y},{z});"
  >
    Eclecticism over style. Partnership over authorship.
  </div>
  <header id={segment} class="fixed b0 l0 w100 z10 mixblend p">
    <h1 class="xl"><a href="/slide#info">MBL</a></h1>
  </header>
  <div id="info" style="background-color:rgb({x},{y},{z});">
    <div class="w100 p text-center" style="background-color:rgb({x},{y},{z});">
      <a href="/#">Eclecticism over style. Partnership over authorship.</a>
    </div>

    <h1 class="fixed b0 w100 z10 mixblend text-center">
      <a href={`${segment}#`}>MBL architectes</a>
    </h1>
    <div class="content">
      {@html page.content.rendered}
    </div>
  </div>
{/if}
{#if segment === undefined}
  <main class="pt">
    <slot />
  </main>
{:else}
  <main>
    <slot />
  </main>
{/if}

<style>
  .xl {
    font-size: 4em;
    letter-spacing: -0.04em;
  }
  .pt {
    padding-top: 2em;
  }
  main {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    /* width: 100%;
  height: 100%; */
  }
  #info {
    display: none;
  }
  #info:target {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
    overflow-y: scroll;
  }
  .content {
    padding: 1em;
  }
  :global(.content p) {
    font-size: 2em;
    letter-spacing: -0.02em;
  }
  :global(.content h2) {
    font-size: 1em;
    letter-spacing: -0.04em;
  }
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
  @media (min-width: 600px) {
    main {
      padding: 0.25em;
    }
  }
</style>
