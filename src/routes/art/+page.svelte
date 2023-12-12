<script>
  import Artwork from "../../components/Artwork.svelte";
  import { togglePalette } from '$lib/themeStore';
</script>

<div class="mt-20 mb-5 px-8 lg:px-10 flex flex-col justify-center items-center gap-10">
  <h1 class="text-4xl text-primary cursor-pointer" on:click={togglePalette}>artworks</h1>

  <div class="flex flex-col">
    <!-- MAIN -->
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
      <Artwork thumb="main/inaked.jpg" />
      <Artwork thumb="main/inashort.jpg" />
      <Artwork thumb="main/mona.jpg" />
      <Artwork thumb="main/orichara2.jpg" />
      <Artwork thumb="main/petra-snow.jpg" />
      <Artwork thumb="main/snow.jpg" />
      <Artwork thumb="main/menhera.jpg" />
      <Artwork thumb="main/kaibd.jpg" />
      <Artwork thumb="main/emopurin.jpg" />
      <Artwork thumb="main/orichara.jpg" />
      <Artwork thumb="main/nekonoeru.jpg" />
      <Artwork thumb="main/tmt.jpg" />
      <Artwork thumb="main/petraneko.jpg" />
      <Artwork thumb="main/monasummer.jpg" />
      <Artwork thumb="main/petra.jpg" />
      <Artwork thumb="main/dogson.jpg" />
      <Artwork thumb="main/melchan.jpg" />
      <Artwork thumb="main/calliopaint.jpg" />
      <Artwork thumb="main/monyan.jpg" />
      <Artwork thumb="main/uto.jpg" />
      <Artwork thumb="main/hotpurin.jpg" />
      <Artwork thumb="main/miobday.jpg" />
      <Artwork thumb="main/noshiro.jpg" />
    </div>

    <!-- OLD -->
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
      <Artwork thumb="main/rei.jpg" />
      <Artwork thumb="main/2b.jpg" />
      <Artwork thumb="main/carbonmonoxide.jpg" />
      <Artwork thumb="main/coop.jpg" />
      <Artwork thumb="main/marzia.jpg" />
    </div>

    <!-- EXTRA -->
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
      <Artwork thumb="main/emptiness_and_helplessness.jpg" />
      <Artwork thumb="main/i_dont_love.jpg" />
    </div>

    <!-- TV/MOVIES -->
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
      <Artwork thumb="tv/lit.jpg" />
      <Artwork thumb="tv/breakingbad.jpg" />
      <Artwork thumb="tv/arrival.jpg" />
      <Artwork thumb="tv/mrrobot.jpg" />
      <Artwork thumb="tv/poi.jpg" />
    </div>
  </div>
</div>

<div class="flex justify-center items-center text-primary w-full py-6 opacity-80">
  <h6 class="font-medium">made with ♡ - do not steal</h6>
</div>
