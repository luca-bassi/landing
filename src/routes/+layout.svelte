<script>
  import "../global.css";
  import "../app.css";

  import PaletteLoader from "../components/PaletteLoader.svelte";
</script>

<style>
  :root {
    --primary: #71717a;
    --background: #27272a;
    --on-background: #a1a1aa;
    --on-primary: #52525b;
  }
</style>

<svelte:head>
	<meta name="theme-color" content="#27272a" />
</svelte:head>

<PaletteLoader/>

<slot />