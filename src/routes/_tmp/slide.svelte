<script context="module">
  export function preload() {
    return this.fetch(
      `https://api.martinezbaratlafore.com/wp-json/wp/v2/posts?_embed&per_page=100`
    )
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  // import "lazysizes";
  import Carousel from "@beyonk/svelte-carousel";
  // console.log(posts);
  import { onMount } from "svelte";

  onMount(() => {
    var lazyImages = [].slice.call(document.querySelectorAll("img"));
    if (typeof IntersectionObserver !== "undefined") {
      let lazyImageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            // lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazyload");
            lazyImage.classList.add("loaded");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }

    var lazyVideos = [].slice.call(document.querySelectorAll("video"));
    if (typeof IntersectionObserver !== "undefined") {
      let lazyVideoObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyVideo = entry.target;
            lazyVideo.src = lazyVideo.dataset.src;
            lazyVideo.classList.remove("lazyload");
            lazyVideo.classList.add("loaded");
            lazyVideoObserver.unobserve(lazyVideo);
          }
        });
      });
      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });
</script>

<svelte:head>
  <title>MBL Slide</title>
</svelte:head>
<aside class="fixed t0 r0 z10 p">
  <a
    href="https://cyberfem-pdf-renderer.herokuapp.com/api/render?emulateScreenMedia=false&url=https://mbl.vercel.app/pdf"
    >PDF</a
  >
</aside>
{#each posts as post}
  <article id={post.slug}>
    <header>
      <h2>{post.title.rendered}</h2>
    </header>
    <Carousel perPage={1} duration={0} draggable={true}>
      {@html post.content.rendered
        .replace(/src=/gi, "data-src=")
        .replace(/srcset=/gi, "dataa-srcset=")
        .replace(/wp-image-/gi, "lazyload wp-img-")}
      {#if post.acf.description}
        <figure class="p1">
          <!-- <div class="row">
            <p class="sm">{post.title.rendered}</p>
          </div> -->
          {#if post.acf.description}
            <div class="row">
              <p class="sm">{post.acf.description}</p>
            </div>
          {/if}
          {#if post.acf.year}
            <div class="row">
              <div class="label">Year</div>
              <div class="data">{post.acf.year}</div>
            </div>
          {/if}
          {#if post.acf.location}
            <div class="row">
              <div class="label">Location</div>
              <div class="data">{post.acf.location}</div>
            </div>
          {/if}
          {#if post.acf.program}
            <div class="row">
              <div class="label">Program</div>
              <div class="data">{post.acf.program}</div>
            </div>
          {/if}
          {#if post.acf.client}
            <div class="row">
              <div class="label">Client</div>
              <div class="data">{post.acf.client}</div>
            </div>
          {/if}
          {#if post.acf.status}
            <div class="row">
              <div class="label">Status</div>
              <div class="data">{post.acf.status}</div>
            </div>
          {/if}
          {#if post.acf.area}
            <div class="row">
              <div class="label">Area</div>
              <div class="data">{post.acf.area} m<sup>2</sup></div>
            </div>
          {/if}
          {#if post.acf.budget}
            <div class="row">
              <div class="label">Cost</div>
              <div class="data">{post.acf.budget}</div>
            </div>
          {/if}
          {#if post.acf.team}
            <div class="row">
              <div class="label">Team</div>
              <div class="data">{post.acf.team}</div>
            </div>
          {/if}
        </figure>
      {/if}
    </Carousel>
  </article>
{/each}

<style>
  .row {
    display: flex;
    width: 100%;
  }

  .label {
    width: 120px;
  }

  .data {
    width: 100%;
  }

  figure {
    min-height: 500px;
    /* background-color: rgb(250, 250, 250); */
  }

  figcaption {
    display: none;
  }
  article {
    padding: 0;
    flex: 0 0 100%;
    max-width: 100%;
    height: 100%;
    margin-top: 1em;
    background-color: white;
  }
  @media (min-width: 600px) {
    main article {
      margin-top: 0;
    }

    article {
      padding: 0.1em;
      flex: 0 0 50%;
      max-width: 50%;
    }
    /* .sm,
  .label,
  .data,
  aside article p {
    font-size: 0.5em;
    letter-spacing: 0;
  } */

    /* figure {
    height: 500px;
  } */
  }
  .left,
  .right {
    display: none;
  }

  .carousel ul {
    display: none !important;
  }

  #n3,
  #n4 {
    display: none;
  }

  .left,
  .right {
    display: block;
    width: 50% !important;
    top: 0 !important;
    bottom: 0 !important;
    height: 100% !important;
    margin-top: 0 !important;
  }

  .left {
    left: 0 !important;
  }

  .right {
    right: 0 !important;
  }

  @media (min-width: 960px) {
    article {
      flex: 0 0 33.33%;
      max-width: 33.33%;
    }

    #n3 {
      display: block;
    }
  }

  @media (min-width: 1280px) {
    article {
      flex: 0 0 25%;
      max-width: 25%;
    }

    #n4 {
      display: block;
    }
  }
  @page {
    size: 21cm 29.7cm;
    margin: 1cm;
  }

  body {
    font-size: 13pt;
    orphans: 3;
    widows: 3;
    letter-spacing: 0;
  }
</style>
