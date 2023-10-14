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

<img src={imgUrl} id="propic" class="rounded-2xl w-60 md:w-auto md:h-48" crossorigin="anonymous"/>