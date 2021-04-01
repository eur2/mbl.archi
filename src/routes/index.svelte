<script context="module">
  export function preload() {
    return this.fetch(
      `https://api.mbl.archi/wp-json/wp/v2/posts?_embed&per_page=100`
    )
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import Post from "../components/Post.svelte";
  // import "lazysizes";
  // console.log(posts[0]);
</script>

<svelte:head>
  <title>MBL architectes</title>
</svelte:head>
{#each posts as post}
  <Post
    slug={post.slug}
    title={post.title.rendered}
    phrase={post.acf.phrase}
    description={post.acf.description}
    year={post.acf.year}
    budget={post.acf.budget}
    area={post.acf.area}
    team={post.acf.team}
    program={post.acf.program}
    client={post.acf.client}
    status={post.acf.status}
    location={post.acf.location}
    video={post.acf.video}
    images={post.acf.images}
  />
{/each}

<!-- <footer style="display:none">
  {#each posts as post}
    <a href={post.slug}>{post.slug}</a>
  {/each}
</footer> -->
