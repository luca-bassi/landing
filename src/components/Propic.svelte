<script>
  import { propicUrl } from '$lib/propicStore';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<svelte:head>
  <link id="favicon" rel="shortcut icon" type="image/jpg" href={$propicUrl}/>
</svelte:head>

{#if $propicUrl}
  <img src={$propicUrl} id="propic" on:load={() => dispatch('imgload')} class="rounded-2xl w-60 md:w-auto md:h-48" crossorigin="anonymous"/>
{/if}