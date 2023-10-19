<script>
  import { createEventDispatcher } from 'svelte';
  import { propicUrl } from '$lib/propicStore';
</script>

<svelte:head>
  <link id="favicon" rel="shortcut icon" type="image/jpg" href={$propicUrl}/>
</svelte:head>

{#if $propicUrl}
  <img src={$propicUrl} id="propic" class="rounded-2xl w-60 md:w-auto md:h-48" crossorigin="anonymous"/>
{/if}