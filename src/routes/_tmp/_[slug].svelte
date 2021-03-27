<script context="module">
  export async function preload(page) {
    const { slug } = page.params;
    const req = await this.fetch(
      "https://api.mbl.archi/wp-json/wp/v2/posts?slug=" + slug
    ).then((r) => r.json());
    return { post: req[0] };
  }
</script>

<script>
  export let post;
  // console.log(post);

  // import { onMount } from "svelte";
  // onMount(() => {
  //   print();
  // });
</script>

<svelte:head>
  <title>{post.title.rendered}</title>
</svelte:head>
<article id={post.slug}>
  <div class="phrase">
    <h1>{post.title.rendered}</h1>

    {#if post.acf.phrase}
      <h2>{post.acf.phrase}</h2>
    {/if}
  </div>
  <header>
    <!-- <h1>{post.title.rendered}</h1> -->
    <!-- {#if post.acf.phrase}
      <h2>{post.acf.phrase}</h2>
    {/if} -->
    <div>
      {#if post.acf.description}
        <div class="f50">
          <p>{post.acf.description}</p>
        </div>
      {/if}
    </div>
    <div class="facts f50">
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
          <div class="data">{post.acf.budget} EUR HT</div>
        </div>
      {/if}
      {#if post.acf.team}
        <div class="row">
          <div class="label">Team</div>
          <div class="data">{post.acf.team}</div>
        </div>
      {/if}
    </div>
  </header>
  <div class="grid">
    {#if post.acf.images.img_1}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_1.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_1.sizes["1536x1536-width"]}
          height={post.acf.images.img_1.sizes["1536x1536-height"]}
        />
        <figcaption>{post.acf.images.img_1.title}</figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_2}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_2.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_2.sizes["1536x1536-width"]}
          height={post.acf.images.img_2.sizes["1536x1536-height"]}
        />
        <figcaption>{post.acf.images.img_2.title}</figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_3}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_3.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_3.sizes["1536x1536-width"]}
          height={post.acf.images.img_3.sizes["1536x1536-height"]}
        />
        <figcaption>{post.acf.images.img_3.title}</figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_4}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_4.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_4.sizes["1536x1536-width"]}
          height={post.acf.images.img_4.sizes["1536x1536-height"]}
        />
        <figcaption>{post.acf.images.img_4.title}</figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_5}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_5.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_5.sizes["1536x1536-width"]}
          height={post.acf.images.img_5.sizes["1536x1536-height"]}
        />
        <figcaption>{post.acf.images.img_5.title}</figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_6}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_6.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_6.sizes["1536x1536-width"]}
          height={post.acf.images.img_6.sizes["1536x1536-height"]}
        />
        <figcaption>{post.acf.images.img_6.title}</figcaption>
      </figure>
    {/if}
  </div>

  <div class="single">
    {#if post.acf.images.img_1}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_1.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_1.sizes["1536x1536-width"]}
          height={post.acf.images.img_1.sizes["1536x1536-height"]}
        />
        <figcaption>
          <div class="mbl">MBL architectes</div>
          <div>{post.acf.images.img_1.title}</div>
        </figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_2}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_2.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_2.sizes["1536x1536-width"]}
          height={post.acf.images.img_2.sizes["1536x1536-height"]}
        />
        <figcaption>
          <div class="mbl">MBL architectes</div>
          <div>{post.acf.images.img_2.title}</div>
        </figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_3}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_3.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_3.sizes["1536x1536-width"]}
          height={post.acf.images.img_3.sizes["1536x1536-height"]}
        />
        <figcaption>
          <div class="mbl">MBL architectes</div>
          <div>{post.acf.images.img_3.title}</div>
        </figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_4}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_4.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_4.sizes["1536x1536-width"]}
          height={post.acf.images.img_4.sizes["1536x1536-height"]}
        />
        <figcaption>
          <div class="mbl">MBL architectes</div>
          <div>{post.acf.images.img_4.title}</div>
        </figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_5}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_5.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_5.sizes["1536x1536-width"]}
          height={post.acf.images.img_5.sizes["1536x1536-height"]}
        />
        <figcaption>
          <div class="mbl">MBL architectes</div>
          <div>{post.acf.images.img_5.title}</div>
        </figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_6}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_6.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_6.sizes["1536x1536-width"]}
          height={post.acf.images.img_6.sizes["1536x1536-height"]}
        />
        <figcaption>
          <div class="mbl">MBL architectes</div>
          <div>{post.acf.images.img_6.title}</div>
        </figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_7}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_7.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_7.sizes["1536x1536-width"]}
          height={post.acf.images.img_7.sizes["1536x1536-height"]}
        />
        <figcaption>
          <div class="mbl">MBL architectes</div>
          <div>{post.acf.images.img_7.title}</div>
        </figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_8}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_8.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_8.sizes["1536x1536-width"]}
          height={post.acf.images.img_8.sizes["1536x1536-height"]}
        />
        <figcaption>
          <div class="mbl">MBL architectes</div>
          <div>{post.acf.images.img_8.title}</div>
        </figcaption>
      </figure>
    {/if}
    {#if post.acf.images.img_9}
      <figure>
        <img
          loading="eager"
          src={post.acf.images.img_9.sizes["1536x1536"]}
          alt="MBL"
          width={post.acf.images.img_9.sizes["1536x1536-width"]}
          height={post.acf.images.img_9.sizes["1536x1536-height"]}
        />
        <figcaption>
          <div class="mbl">MBL architectes</div>
          <div>{post.acf.images.img_9.title}</div>
        </figcaption>
      </figure>
    {/if}
  </div>
  <footer>MBL architectes</footer>
</article>

<style>
  .row {
    display: flex;
    width: 100%;
  }
  .label {
    width: 100px;
  }
  @media print {
    @page {
      size: 21cm 29.7cm;
      margin: 1cm 2cm 1cm 2cm;
    }
    :global(body) {
      font-size: 13pt;
      line-height: 1.1;
      orphans: 3;
      widows: 3;
      -webkit-font-smoothing: auto;
      -moz-osx-font-smoothing: auto;
    }
    h1,
    p {
      font-size: 1em;
    }
    h2 {
      font-size: 3em;
      line-height: 1;
    }
    /* article {
      display: block;
      height: 100vh;
      page-break-after: always;
      margin-top: 0;
    } */
    /* .text {
      height: 100vh;
    } */

    footer {
      position: fixed;
      bottom: 0;
    }
    .mbl {
      visibility: hidden;
    }
    header {
      max-width: 75%;
    }
    .phrase {
      max-width: 80%;

      /* position: absolute;
      bottom: 0;
      left: 0; */
      /* margin-bottom: 25%; */
    }
    .grid {
      /* margin-top: 2em; */
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-gap: 2mm;
    }
    /* .f50 {
      flex: 0 0 50%;
      max-width: 50%;
      padding-right: 1em;
    } */
    .facts {
    }
    .row {
      display: flex;
      width: 100%;
    }
    .label {
      width: 100px;
    }
    .data {
      max-width: 50%;
    }
    .single figure {
      position: relative;
      height: 100vh;
      /* height: 95vh; */
    }
    .single figure img {
      min-height: 75vh;
    }
    .single figure figcaption {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    /* .single figure img {
      height: 75vh;
    } */
    /* .single figure figcaption {
      position: absolute;
      bottom: 0;
      right: 0;
    } */
    .grid figcaption {
      font-size: 0.5em;
    }
    figcaption {
    }
    .break,
    header {
      page-break-after: always;
    }
    article,
    a,
    blockquote,
    figure,
    img,
    table,
    pre,
    .grid {
      page-break-inside: avoid;
      break-inside: avoid;
    }
    h1,
    h2,
    h3,
    h4 {
      page-break-after: avoid;
      page-break-inside: avoid;
    }
    ul,
    ol,
    dl {
      page-break-before: avoid;
    }
    aside,
    nav,
    button,
    .btn,
    .print-none {
      display: none !important;
    }
  }
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  /*.content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }*/
</style>
