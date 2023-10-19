<script>
  import { onMount } from 'svelte';
  import { mode, schemes } from '$lib/themeStore';
  import { propicUrl, getPropicUrl } from '$lib/propicStore';

  import {
    hexFromArgb,
    themeFromSourceColor,
    sourceColorFromImage
  } from '@material/material-color-utilities';

  function setPalette() {
    const colors = $schemes[$mode];
    document.documentElement.style.setProperty('--background', colors.background);
    document.documentElement.style.setProperty('--primary', colors.primary);
    document.documentElement.style.setProperty('--on-background', colors.onBackground);
    document.documentElement.style.setProperty('--on-primary', colors.onPrimary);
    document.querySelector('meta[name="theme-color"]').setAttribute("content", colors.background);
  }

  export function togglePalette() {
    mode.set($mode == 'dark' ? 'light' : 'dark');
  }

  onMount(async function (){
    console.log($propicUrl);
    if(!$propicUrl){
      await getPropicUrl();
      loadAndSetScheme();
    }
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
</script>
