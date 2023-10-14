import { writable } from 'svelte/store';

export const propicUrl = writable();

export async function getPropicUrl(){
  const url = 'https://unavatar.io/twitter/lucabassiart?json';

  const propicData = await fetch(url).then((data) => data.json());

  propicUrl.set(propicData.url);
}
