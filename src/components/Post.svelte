<script>
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
    video,
    images;
  let visible;
  let slideVisible;
  let slideIndex;
  function handleToggle() {
    visible = !visible;
  }
  function handleToggleSlide(index) {
    slideVisible = !slideVisible;
    slideIndex = index;
  }
  import Carousel from "@beyonk/svelte-carousel";
  // import Siema from "siema";
  import { onMount } from "svelte";

  onMount(() => {
    // const mySiema = new Siema({
    //   duration: 0,
    //   draggable: true,
    //   loop: true,
    // });
    // const prev = document.querySelector(".prev");
    // const next = document.querySelector(".next");
    // prev.addEventListener("click", () => mySiema.prev());
    // next.addEventListener("click", () => mySiema.next());

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
            lazyImage.classList.remove("lazy");
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
            lazyVideo.classList.remove("lazy");
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

<article>
  <header>
    <h2>
      <a
        download={`${slug}.pdf`}
        href={`https://cyberfem-pdf-renderer.herokuapp.com/api/render?emulateScreenMedia=false&url=https://api.mbl.archi/${slug}/#en`}
        >{title}</a
      >
      <!-- <a href={`/docs/en_${slug}.pdf`}>{title}</a> -->
    </h2>
    {#if phrase}
      <h3><button on:click={handleToggle}>{phrase}</button></h3>
    {/if}
    {#if description}
      <p class={visible ? "" : "trim"}>{description}</p>
    {/if}
  </header>

  {#if visible}
    <div class="facts">
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

  <!-- <div class="content" on:click={() => handleToggleSlide(0)}> -->
  <!-- .replace("<figure", `<figure ${on:click={() => handleToggleSlide(0)}}`) -->
  {#if images}
    <div class="grid">
      <!-- {@html content
      .replace(/src=/gi, "data-src=")
      .replace(/srcset=/gi, "dataa-srcset=")
      .replace(/wp-image-/gi, "lazy wp-img-")} -->
      {#if video}
        <video
          autoplay
          loop
          muted
          playsinline
          src=""
          data-src={video.url}
          on:click={() => handleToggleSlide(0)}
        />
      {/if}
      {#if images.img_1}
        <img
          on:click={() => handleToggleSlide(`${video ? 1 : 0}`)}
          class="lazy"
          src=""
          data-src={images.img_1.sizes.thumbnail}
          alt="MBL"
          width={images.img_1.sizes["thumbnail-width"]}
          height={images.img_1.sizes["thumbnail-height"]}
        />
      {/if}
      {#if images.img_2}
        <img
          on:click={() => handleToggleSlide(`${video ? 2 : 1}`)}
          class="lazy"
          src=""
          data-src={images.img_2.sizes.thumbnail}
          alt="MBL"
          width={images.img_2.sizes["thumbnail-width"]}
          height={images.img_2.sizes["thumbnail-height"]}
        />
      {/if}
      {#if images.img_3}
        <img
          on:click={() => handleToggleSlide(`${video ? 3 : 2}`)}
          class="lazy"
          src=""
          data-src={images.img_3.sizes.thumbnail}
          alt="MBL"
          width={images.img_3.sizes["thumbnail-width"]}
          height={images.img_3.sizes["thumbnail-height"]}
        />
      {/if}
      {#if images.img_4}
        <img
          on:click={() => handleToggleSlide(`${video ? 4 : 3}`)}
          class="lazy"
          src=""
          data-src={images.img_4.sizes.thumbnail}
          alt="MBL"
          width={images.img_4.sizes["thumbnail-width"]}
          height={images.img_4.sizes["thumbnail-height"]}
        />
      {/if}
      {#if images.img_5}
        <img
          on:click={() => handleToggleSlide(`${video ? 5 : 4}`)}
          class="lazy"
          src=""
          data-src={images.img_5.sizes.thumbnail}
          alt="MBL"
          width={images.img_5.sizes["thumbnail-width"]}
          height={images.img_5.sizes["thumbnail-height"]}
        />
      {/if}
      {#if video}{""}{:else if images.img_6}
        <img
          on:click={() => handleToggleSlide(`${video ? 6 : 5}`)}
          class="lazy"
          src=""
          data-src={images.img_6.sizes.thumbnail}
          alt="MBL"
          width={images.img_6.sizes["thumbnail-width"]}
          height={images.img_6.sizes["thumbnail-height"]}
        />
      {/if}
    </div>
  {/if}

  {#if slideVisible}
    <div class="container">
      <div class="overlay" on:click={handleToggleSlide} />
      <div class="slide">
        <!-- <div class="siema">
          {#if images.img_1}
            <figure>
              <img loading="lazy" src={images.img_1.sizes.medium} alt="MBL" />
            </figure>
          {/if}
          {#if images.img_2}
            <figure>
              <img loading="lazy" src={images.img_2.sizes.medium} alt="MBL" />
            </figure>
          {/if}
        </div>
        <button class="prev w33 h90 fixed b0 l0" />
        <button class="next w33 h90 fixed b0 r0" /> -->
        <Carousel
          startIndex={slideIndex}
          dots={false}
          controls={true}
          perPage={1}
          duration={0}
          draggable={true}
        >
          <!-- <span class="control left" slot="left-control">{"<"}</span> -->
          {#if video}
            <figure>
              <video autoplay loop muted src={video.url} playsinline />
            </figure>
          {/if}
          {#if images.img_1}
            <figure>
              <img
                loading="lazy"
                src={images.img_1.sizes["1536x1536"]}
                alt="MBL"
                width={images.img_1.sizes["1536x1536-width"]}
                height={images.img_1.sizes["1536x1536-height"]}
              />
            </figure>
          {/if}
          {#if images.img_2}
            <figure>
              <img
                loading="lazy"
                src={images.img_2.sizes["1536x1536"]}
                alt="MBL"
                width={images.img_2.sizes["1536x1536-width"]}
                height={images.img_2.sizes["1536x1536-height"]}
              />
            </figure>
          {/if}
          {#if images.img_3}
            <figure>
              <img
                loading="lazy"
                src={images.img_3.sizes["1536x1536"]}
                alt="MBL"
                width={images.img_3.sizes["1536x1536-width"]}
                height={images.img_3.sizes["1536x1536-height"]}
              />
            </figure>
          {/if}
          {#if images.img_4}
            <figure>
              <img
                loading="lazy"
                src={images.img_4.sizes["1536x1536"]}
                alt="MBL"
                width={images.img_4.sizes["1536x1536-width"]}
                height={images.img_4.sizes["1536x1536-height"]}
              />
            </figure>
          {/if}
          {#if images.img_5}
            <figure>
              <img
                loading="lazy"
                src={images.img_5.sizes["1536x1536"]}
                alt="MBL"
                width={images.img_5.sizes["1536x1536-width"]}
                height={images.img_5.sizes["1536x1536-height"]}
              />
            </figure>
          {/if}
          {#if images.img_6}
            <figure>
              <img
                loading="lazy"
                src={images.img_6.sizes["1536x1536"]}
                alt="MBL"
                width={images.img_6.sizes["1536x1536-width"]}
                height={images.img_6.sizes["1536x1536-height"]}
              />
            </figure>
          {/if}
          {#if images.img_7}
            <figure>
              <img
                loading="lazy"
                src={images.img_7.sizes["1536x1536"]}
                alt="MBL"
                width={images.img_7.sizes["1536x1536-width"]}
                height={images.img_7.sizes["1536x1536-height"]}
              />
            </figure>
          {/if}
          {#if images.img_8}
            <figure>
              <img
                loading="lazy"
                src={images.img_8.sizes["1536x1536"]}
                alt="MBL"
                width={images.img_8.sizes["1536x1536-width"]}
                height={images.img_8.sizes["1536x1536-height"]}
              />
            </figure>
          {/if}
          {#if images.img_9}
            <figure>
              <img
                loading="lazy"
                src={images.img_9.sizes["1536x1536"]}
                alt="MBL"
                width={images.img_9.sizes["1536x1536-width"]}
                height={images.img_9.sizes["1536x1536-height"]}
              />
            </figure>
          {/if}
          <!-- <span class="control right" slot="right-control">{">"}</span> -->
        </Carousel>
      </div>
      <button class="close" on:click={handleToggleSlide}> × </button>
    </div>
  {/if}
</article>
