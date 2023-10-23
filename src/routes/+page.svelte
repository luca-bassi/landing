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

  function hexToRgb(hex) {
    if(hex[0]=='#'){ hex = hex.substring(1) };
    var comps = hex.match(/.{1,2}/g);
    return `${parseInt(comps[0], 16)}, ${parseInt(comps[1], 16)}, ${parseInt(comps[2], 16)}`;
  }

  let ready;

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

    schemes.set(palette);
    setPalette();

    ready = true;
  };
</script>

<div class="min-h-screen flex flex-col justify-center items-center bg-background p-2">

  {#key ready}
    <div class="relative flex justify-center items-center h-3 w-3" class:hidden={ready}>
      <span class="animate-ping h-full w-full rounded-full bg-on-background opacity-75"></span>
    </div>

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

