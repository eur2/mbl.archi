<script>
  // import "lazysizes";
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

<style>
  :global(.hidden figure) {
    display: none;
  }
  :global(.hidden figure:first-child) {
    display: block;
  }
  :global(.visible figure) {
    display: block;
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
  article {
    padding: 0.25em;
    flex: 0 0 100%;
    max-width: 100%;
    height: 100%;
    margin-bottom: 1em;
    background-color: white;
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

  /* article {
    padding: 0;
    margin: 0;
    flex: 0 0 100%;
    max-width: 100%;
    display: flex;
  } */
  .facts {
    padding-bottom: 1em;
  }
  /* .content {
    flex-wrap: wrap;
    height: 50vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  } */
  @media (max-width: 420px) {
  }
  @media (min-width: 600px) {
    article {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  @media (min-width: 960px) {
    article {
      flex: 0 0 33.33%;
      max-width: 33.33%;
    }
  }
  @media (min-width: 1280px) {
    article {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
  @media print {
    article {
      display: block;
      min-height: 100vh;
      page-break-after: always;
    }
    .facts {
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
    figure {
      /* flex: 0 0 50%;
      max-width: 50%; */
      height: 75vh;
      page-break-after: always;
    }
    .break {
      page-break-after: always;
    }
    a,
    blockquote,
    figure,
    img,
    video,
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
  <div class="content {visible ? 'visible' : 'hidden'}">
    {@html content}
  </div>
</article>
