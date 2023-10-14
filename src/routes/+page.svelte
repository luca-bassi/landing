<script>
    import Propic from "../components/Propic.svelte";
    import Socials from "../components/Socials.svelte";
</script>

<div class="min-h-screen flex flex-col justify-center items-center bg-slate-800">

  <div class="flex flex-col md:flex-row gap-8">
    <div class="flex justify-center">
      <Propic/>
    </div>
  
    <div class="flex flex-col gap-4 justify-between">
      <div class="flex flex-col gap-2">
        <div>
          <h1 class="text-4xl text-slate-400">るk</h1>
          <h2 class="text-base text-slate-400">@lucabassiart</h2>
        </div>
        <p class="text-white">Musician, artist. Creating is purpose</p>
      </div>

      <Socials/>
    </div>
  </div>

</div>

