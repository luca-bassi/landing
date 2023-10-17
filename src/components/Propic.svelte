<script>
  import { onMount } from 'svelte';
  import { propicUrl, getPropicUrl } from '$lib/propicStore';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let imgUrl;

  onMount(function(){
    propicUrl.subscribe(function(url){
      imgUrl = url;
    });

    getPropicUrl();
  });
</script>

<svelte:head>
  <link id="favicon" rel="shortcut icon" type="image/jpg" href={imgUrl}/>
</svelte:head>

{#if imgUrl}
  <img src={imgUrl} id="propic" on:load={() => dispatch('imgload')} class="rounded-2xl w-60 md:w-auto md:h-48" crossorigin="anonymous"/>
{/if}