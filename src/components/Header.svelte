<script>
  let visible;
  function handleToggle() {
    visible = !visible;
  }
  export let x, y, z;
</script>

<header>
  <div
    class="absolute t0 l0 r0 p text-center z3"
    style="background-color:rgb({x},{y},{z});"
  >
    <h1><button on:click={handleToggle}>MBL architectes</button></h1>
  </div>
  <div class="fixed t0 w100 z2 mixblend text-center p">
    <button on:click={handleToggle}>MBL architectes</button>
  </div>
  {#if visible}
    <div
      class="fixed t0 l0 r0 b0 z3 o-y-auto"
      style="background-color:rgb({x},{y},{z});"
    >
      <div class="fixed t0 w100 z2 mixblend text-center p">
        <button on:click={handleToggle}>× MBL architectes</button>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  {/if}
</header>
