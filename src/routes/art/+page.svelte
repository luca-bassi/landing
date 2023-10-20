<script>
  import Artwork from "../../components/Artwork.svelte";
  import { togglePalette } from '$lib/themeStore';
</script>

<div class="mt-20 px-8 lg:px-10 flex flex-col justify-center items-center gap-10">
  <h1 class="text-4xl text-primary cursor-pointer" on:click={togglePalette}>artworks</h1>
  <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
    <Artwork thumb="images/main/inashort.jpg" />
    <Artwork thumb="images/main/mona.jpg" />
    <Artwork thumb="images/main/orichara2.jpg" />
    <Artwork thumb="images/main/petra-snow.jpg" />
    <Artwork thumb="images/main/snow.jpg" />
    <Artwork thumb="images/main/menhera.jpg" />
    <Artwork thumb="images/main/kaibd.jpg" />
    <Artwork thumb="images/main/emopurin.jpg" />
    <Artwork thumb="images/main/orichara.jpg" />
    <Artwork thumb="images/main/nekonoeru.jpg" />
    <Artwork thumb="images/main/tmt.jpg" />
    <Artwork thumb="images/main/petraneko.jpg" />
    <Artwork thumb="images/main/monasummer.jpg" />
    <Artwork thumb="images/main/petra.jpg" />
    <Artwork thumb="images/main/dogson.jpg" />
    <Artwork thumb="images/main/melchan.jpg" />
    <Artwork thumb="images/main/calliopaint.jpg" />
    <Artwork thumb="images/main/monyan.jpg" />
    <Artwork thumb="images/main/uto.jpg" />
    <Artwork thumb="images/main/hotpurin.jpg" />
    <Artwork thumb="images/main/miobday.jpg" />
    <Artwork thumb="images/main/noshiro.jpg" />
  </div>
</div>
