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
  // console.log(posts);
  $: shufflePosts = posts.slice(1).sort(() => Math.random() - 0.5);
</script>

<svelte:head>
  <html lang="en" />
  <title>MBL architectes</title>
</svelte:head>
<Post
  slug={posts[0].slug}
  title={posts[0].title.rendered}
  phrase={posts[0].acf.phrase}
  description={posts[0].acf.description}
  year={posts[0].acf.year}
  budget={posts[0].acf.budget}
  area={posts[0].acf.area}
  team={posts[0].acf.team}
  program={posts[0].acf.program}
  client={posts[0].acf.client}
  status={posts[0].acf.status}
  location={posts[0].acf.location}
  video={posts[0].acf.video}
  images={posts[0].acf.images}
/>
{#each shufflePosts as post}
  {#if post.categories[0] === 4}
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
  {/if}
{/each}

<!-- <footer style="display:none">
  {#each posts as post}
    <a href={post.slug}>{post.slug}</a>
  {/each}
</footer> -->
