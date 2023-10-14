<script>
  import { onMount } from 'svelte';
  import { propicUrl, getPropicUrl } from '$lib/propicStore';

  let imgUrl;

  onMount(function(){
    propicUrl.subscribe(function(url){
      imgUrl = url;
    });

    getPropicUrl();
  });
</script>

{#if imgUrl}
  <img src={imgUrl} alt="propic" class="rounded-2xl w-60 md:w-auto md:h-[200px]"/>
{/if}