<script>
  import "../global.css";
  import "../app.css";

  import { fade } from "svelte/transition";
  import Navbar from "../components/Navbar.svelte";

  /* PALETTE HANDLING */
  import { onMount } from 'svelte';
  import { mode, schemes } from '$lib/themeStore';
  import { propicUrl, getPropicUrl } from '$lib/propicStore';

  import {
    hexFromArgb,
    themeFromSourceColor,
    sourceColorFromImage
  } from '@material/material-color-utilities';

  function hexToRgb(hex) {
    if(hex[0]=='#'){ hex = hex.substring(1) };
    var comps = hex.match(/.{1,2}/g);
    return `${parseInt(comps[0], 16)}, ${parseInt(comps[1], 16)}, ${parseInt(comps[2], 16)}`;
  }

  function setPalette() {
    const colors = $schemes[$mode];
    if(!colors){ return }

    document.documentElement.style.setProperty('--background', hexToRgb(colors.background));
    document.documentElement.style.setProperty('--primary', hexToRgb(colors.primary));
    document.documentElement.style.setProperty('--on-background', hexToRgb(colors.onBackground));
    document.documentElement.style.setProperty('--on-primary', hexToRgb(colors.onPrimary));
    document.querySelector('meta[name="theme-color"]').setAttribute("content", hexToRgb(colors.background));

    document.documentElement.dataset.theme = $mode;
  }

  onMount(async function (){
    if(!$propicUrl){
      await getPropicUrl();
      loadAndSetScheme();
    }

    mode.subscribe((m) => setPalette());
  });

  async function loadAndSetScheme() {
    const img = document.createElement("img")
    img.setAttribute('src', $propicUrl);
    img.setAttribute('crossorigin', 'anonymous');

    const sourceColor = await sourceColorFromImage(img);
    // const mainHct = Hct.fromInt(sourceColor);
    const theme = themeFromSourceColor(sourceColor);

    const dark = theme.schemes.dark;
    const light = theme.schemes.light;

    const palette = {
      dark: {
        primary: hexFromArgb(dark.primary),
        background: hexFromArgb(dark.background),
        onPrimary: hexFromArgb(dark.onPrimary),
        onBackground: hexFromArgb(dark.onBackground)
      },
      light: {
        primary: hexFromArgb(light.primary),
        background: hexFromArgb(light.background),
        onPrimary: hexFromArgb(light.onPrimary),
        onBackground: hexFromArgb(light.onBackground)
      }
    }

    schemes.set(palette);
    setPalette();
  };

  export let data;
</script>

<style>
  :root {
    --primary: 113, 113, 122;
    --background: 39, 39, 42;
    --on-background: 161, 161, 170;
    --on-primary: 82, 82, 91;
  }
</style>

<svelte:head>
	<meta name="theme-color" content="rgb(39,39,42)" />
</svelte:head>

<div class="min-h-screen flex flex-col bg-background">
  {#if data.path != '/'}
  <Navbar active={data.path}/>
  {/if}
  {#key data.path}
  <div in:fade={{duration: 500}}>
    <slot />
  </div>
  {/key}
</div>