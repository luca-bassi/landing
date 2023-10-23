<script>
  import { togglePalette } from '$lib/themeStore';
</script>

<div class="mt-20 mb-5 px-8 lg:px-10 flex flex-col justify-center items-center gap-10">
  <h1 class="text-4xl text-primary cursor-pointer" on:click={togglePalette}>music</h1>

  <div class="flex flex-col md:flex-row justify-center items-start gap-8">
    <img src="images/music/leap.jpg" class="rounded-xl aspect-square object-cover object-center max-h-64 dark:brightness-[.8] dark:contrast-[1.2]"/>
    <iframe src="https://open.spotify.com/embed/album/3Feaju7gniJeGnlLkp5Kd5" class="frame-container" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>

  <div class="flex justify-center items-center text-primary">
    <a href="https://open.spotify.com/album/3Feaju7gniJeGnlLkp5Kd5" target="_blank">listen</a>
  </div>
</div>