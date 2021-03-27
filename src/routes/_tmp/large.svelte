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
  import Post from "../components/Post.svelte";
  // import "lazysizes";
  // console.log(posts);
</script>

<svelte:head>
  <title>MBL</title>
</svelte:head>
<aside class="fixed t0 r0 z10 p">
  <a
    href="https://cyberfem-pdf-renderer.herokuapp.com/api/render?emulateScreenMedia=false&url=https://mbl.vercel.app/pdf"
    >PDF</a
  >
</aside>

{#each posts as post}
  <Post
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
    content={post.content.rendered}
  />
{/each}
<!-- <footer class="fixed b0 l0">MBL architectes</footer> -->
