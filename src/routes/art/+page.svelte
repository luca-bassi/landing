<script>
  import Artwork from "../../components/Artwork.svelte";
  import { togglePalette } from '$lib/themeStore';
</script>

<div class="mt-20 mb-5 px-8 lg:px-10 flex flex-col justify-center items-center gap-10">
  <h1 class="text-4xl text-primary cursor-pointer" on:click={togglePalette}>artworks</h1>

  <div class="flex flex-col divide-y">
    <!-- MAIN -->
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
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

    <!-- OLD -->
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
      <Artwork thumb="images/main/rei.jpg" />
      <Artwork thumb="images/main/2b.jpg" />
      <Artwork thumb="images/main/carbonmonoxide.jpg" />
      <Artwork thumb="images/main/coop.jpg" />
      <Artwork thumb="images/main/marzia.jpg" />
    </div>

    <!-- EXTRA -->
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
      <Artwork thumb="images/main/emptiness_and_helplessness.jpg" />
      <Artwork thumb="images/main/i_dont_love.jpg" />
    </div>

    <!-- TV/MOVIES -->
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
      <Artwork thumb="images/tv/lit.jpg" />
      <Artwork thumb="images/tv/breakingbad.jpg" />
      <Artwork thumb="images/tv/arrival.jpg" />
      <Artwork thumb="images/tv/mrrobot.jpg" />
      <Artwork thumb="images/tv/poi.jpg" />
    </div>
  </div>
</div>

<div class="flex justify-center items-center text-primary w-full py-6 opacity-80">
  <h6 class="font-medium cursor-pointer" on:click={() => window.scrollTo({top: 0, behavior: 'smooth'})}>made with ♡ - do not steal</h6>
</div>

<style lang="scss">
  .divide-y > :not([hidden]) ~ :not([hidden]) {
    border-color: rgba(var(--primary), .08);
  }
</style>
