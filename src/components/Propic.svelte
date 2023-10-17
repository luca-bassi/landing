<script>
  import { onMount } from 'svelte';
  import { propicUrl, getPropicUrl } from '$lib/propicStore';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  import { scale } from 'svelte/transition';

  let imgUrl;

  onMount(function(){
    propicUrl.subscribe(function(url){
      imgUrl = url;
    });

    getPropicUrl();
  });
</script>

{#if imgUrl}
  <img src={imgUrl} transition:scale={{duration:1000}} on:introstart={() => dispatch('imgload')} id="propic" class="rounded-2xl w-60 md:w-auto md:h-48" crossorigin="anonymous"/>
{/if}