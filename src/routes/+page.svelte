<script>
  import { mode, schemes } from '$lib/themeStore';
  import { fade } from 'svelte/transition';

  import Propic from "../components/Propic.svelte";
  import Socials from "../components/Socials.svelte";

  import {
    hexFromArgb,
    themeFromSourceColor,
    sourceColorFromImage
  } from '@material/material-color-utilities';

  let ready;

  function setPalette() {
    const colors = $schemes[$mode];
    document.documentElement.style.setProperty('--background', colors.background);
    document.documentElement.style.setProperty('--primary', colors.primary);
    document.documentElement.style.setProperty('--on-background', colors.onBackground);
    document.documentElement.style.setProperty('--on-primary', colors.onPrimary);
    document.querySelector('meta[name="theme-color"]').setAttribute("content", colors.background);
  }

  function togglePalette() {
    mode.set($mode == 'dark' ? 'light' : 'dark');
    setPalette();
  }

  async function loadAndSetScheme() {
    const propic = document.querySelector('#propic');

    const sourceColor = await sourceColorFromImage(propic);
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

    console.log(palette)

    schemes.set(palette);
    setPalette();

    ready = true;
  };
</script>

<svelte:head>
	<meta name="theme-color" content="#27272a" />
</svelte:head>

<div class="min-h-screen flex flex-col justify-center items-center bg-background p-2">

  {#key ready}
    <div class="flex flex-col md:flex-row gap-8" class:hidden={!ready} in:fade={{duration: 1000}}>
      <div class="flex justify-center" on:click={togglePalette}>
        <Propic on:imgload={loadAndSetScheme}/>
      </div>

      <div class="flex flex-col gap-4 justify-between">
        <div class="flex flex-col gap-2">
          <div>
            <h1 class="text-4xl text-primary">るk</h1>
            <h2 class="text-base text-primary">@lucabassiart</h2>
          </div>
          <p class="text-on-background">Musician, artist. Creating is purpose</p>
        </div>

        <Socials/>
      </div>
    </div>
  {/key}
</div>

