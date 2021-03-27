<script>
  // import "lazysizes";
  // console.log(posts);
  export let slug,
    title,
    phrase,
    description,
    year,
    budget,
    area,
    team,
    program,
    client,
    status,
    location,
    content;
  let visible;
  function handleToggle() {
    visible = !visible;
  }
</script>

<article id={slug}>
  <!-- <header>
      <p class="sm">{post.title.rendered}</p>
    </header> -->
  <button on:click={handleToggle}>
    <div class="row">{title}</div>
    {#if phrase}
      <div class="row">
        <h2>{phrase}</h2>
      </div>
    {/if}
  </button>
  {#if visible}
    <div>
      {#if description}
        <div class="f50">
          <div class="row">
            <p class="">{description}</p>
          </div>
        </div>
      {/if}
    </div>
  {/if}
  {#if visible}
    <div class="facts f50">
      {#if year}
        <div class="row">
          <div class="label">Year</div>
          <div class="data">{year}</div>
        </div>
      {/if}
      {#if location}
        <div class="row">
          <div class="label">Location</div>
          <div class="data">{location}</div>
        </div>
      {/if}
      {#if program}
        <div class="row">
          <div class="label">Program</div>
          <div class="data">{program}</div>
        </div>
      {/if}
      {#if client}
        <div class="row">
          <div class="label">Client</div>
          <div class="data">{client}</div>
        </div>
      {/if}
      {#if status}
        <div class="row">
          <div class="label">Status</div>
          <div class="data">{status}</div>
        </div>
      {/if}
      {#if area}
        <div class="row">
          <div class="label">Area</div>
          <div class="data">{area} m<sup>2</sup></div>
        </div>
      {/if}
      {#if budget}
        <div class="row">
          <div class="label">Cost</div>
          <div class="data">{budget} EUR HT</div>
        </div>
      {/if}
      {#if team}
        <div class="row">
          <div class="label">Team</div>
          <div class="data">{team}</div>
        </div>
      {/if}
    </div>
  {/if}

  <div class="content">
    {@html content}
  </div>
</article>

<style>
  :global(body) {
    font-size: 14px;
  }
  :global(h2) {
    font-size: 2em;
    text-transform: unset;
  }
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
  /* article {
    padding: 0;
    margin: 0;

    flex: 0 0 100%;
    max-width: 100%;
    display: flex;
  } */
  article {
    padding: 0.5em;
    flex: 0 0 100%;
    max-width: 100%;
    height: 100%;
    margin-bottom: 1em;
    background-color: white;
  }
  .facts {
    padding-bottom: 1em;
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
  @media (min-width: 600px) {
    article {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  :global(figure) {
    min-height: 100%;
  }
  .content {
    /* flex-wrap: wrap; */
    /* height: 50vh; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.2em;
    grid-auto-rows: minmax(100px, auto);
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
  @media print {
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
    article {
      display: block;
      height: 100vh;
      page-break-after: always;
      margin-top: 0;
    }
    .infos {
      display: flex;
    }
    .f50 {
      flex: 0 0 50%;
      max-width: 50%;
      padding-right: 1em;
    }
    .label {
      width: 150px;
    }
    /* figure {
      flex: 0 0 50%;
      max-width: 50%;
    } */
    .break {
      page-break-after: always;
    }
    article,
    a,
    blockquote,
    figure,
    img,
    table,
    pre {
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
</style>
