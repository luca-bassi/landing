<script>
  import { onMount } from 'svelte';
  import { propicUrl, getPropicUrl } from '$lib/propicStore';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const defaultUrl = 'fallback.jpg';

  let useUrl = defaultUrl;

  onMount(function(){
    getPropicUrl();
    dispatch('imgload');
  });

  // propicUrl.subscribe((url) => {
  //   useUrl = url;
  //   dispatch('imgload')
  // });
</script>

<svelte:head>
  <link id="favicon" rel="shortcut icon" type="image/jpg" href={useUrl}/>
</svelte:head>

<img src={useUrl} id="propic" class="rounded-2xl w-60 md:w-auto md:h-48" crossorigin="anonymous"/>