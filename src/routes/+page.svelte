<script>
  import { onMount } from 'svelte';

  import Propic from "../components/Propic.svelte";
  import Socials from "../components/Socials.svelte";

  import {
    hexFromArgb,
    Hct,
    themeFromSourceColor,
    sourceColorFromImage
  } from '@material/material-color-utilities';


  onMount(async function(){
    const propic = document.querySelector('#propic');
    console.log(propic)

    propic.onload = async function(){
      await getPalette().then((palette) => {
        setPalette(palette);
      });
    };

    async function getPalette() {
      const sourceColor = await sourceColorFromImage(propic);
      const mainHct = Hct.fromInt(sourceColor);
      const theme = themeFromSourceColor(mainHct);

      console.log(theme)
      const dark = theme.schemes.dark;

      const primary = dark.primary;
      const background = dark.background;
      const onPrimary = dark.onPrimary;
      const onBackground = dark.onBackground;

      return {
        primary: hexFromArgb(primary),
        background: hexFromArgb(background),
        onPrimary: hexFromArgb(onPrimary),
        onBackground: hexFromArgb(onBackground)
      }
    }

    function setPalette(palette) {
      console.log(palette)
      document.documentElement.style.setProperty('--background', palette.background);
      document.documentElement.style.setProperty('--primary', palette.primary);
      document.documentElement.style.setProperty('--on-background', palette.onBackground);
      document.documentElement.style.setProperty('--on-primary', palette.onPrimary);
      document.querySelector('meta[name="theme-color"]').setAttribute("content", palette.background);
    }
  });
</script>

<svelte:head>
	<meta name="theme-color" content="#1e293b" />
</svelte:head>

<div class="min-h-screen flex flex-col justify-center items-center bg-background p-2">

  <div class="flex flex-col md:flex-row gap-8">
    <div class="flex justify-center">
      <Propic/>
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

</div>

