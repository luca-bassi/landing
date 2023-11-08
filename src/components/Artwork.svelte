<script>
  import { fly } from 'svelte/transition';
  import { lazyLoad } from '$lib/lazyLoad.js'

  export let thumb;

  let open;
  // const cdnurl = "https://ruuk999.sirv.com";
  const cdnurl = 'images';
</script>

<img use:lazyLoad={`${cdnurl}/${thumb}`} on:click={() => (open=true)} class="img rounded-xl aspect-square object-cover object-center cursor-pointer dark:brightness-[.8] dark:contrast-[1.2]"/>

{#if open}
  <div class="flex flex-col gap-2 items-center justify-center fixed top-0 left-0 h-screen w-screen bg-black/70 z-10 backdrop-blur-sm" on:click={() => (open=false)} in:fly={{duration:300}}>
    <img src={`${cdnurl}/${thumb}`} class="max-w-[80%] rounded-3xl sm:max-h-[80%] dark:brightness-[.8] dark:contrast-[1.2]" />
    <p class="text-background dark:text-on-background">Click anywhere to dismiss</p>
  </div>
{/if}

<style>
  .img {
    opacity: 0;
    transition: all 1s ease;
  }
</style>