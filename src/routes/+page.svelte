<script>
  import { fade } from 'svelte/transition';

  import Propic from "../components/Propic.svelte";
  import Socials from "../components/Socials.svelte";

  import { mode } from '$lib/themeStore';

  let ready;

  function togglePalette() {
    mode.set($mode == 'dark' ? 'light' : 'dark');
  }
</script>

<div class="min-h-screen flex flex-col justify-center items-center p-2">

  {#key ready}
    <div class="flex flex-col md:flex-row gap-8" class:hidden={!ready} in:fade={{duration: 1000}}>
      <div class="flex justify-center" on:click={togglePalette}>
        <Propic on:imgload={() => ready=true }/>
      </div>

      <div class="flex flex-col gap-4 justify-between">
        <div class="flex flex-col gap-2">
          <div>
            <h1 class="text-4xl text-primary">るk</h1>
            <h2 class="text-base text-primary">@lucabassiart</h2>
          </div>
          <p class="text-on-background">Musician, artist. Creating is purpose</p>
        </div>

        <Socials/>
      </div>
    </div>
  {/key}
</div>

