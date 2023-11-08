import { writable } from 'svelte/store';

export const propicUrl = writable();

export async function getPropicUrl(){
  const url = 'https://unavatar.io/twitter/lucabassiart?json&ttl=24h';
  const defaultUrl = 'fallback.jpg';

  try{
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const propicData = await fetch(url, {signal: controller.signal}).then((data) => data.json());
    clearTimeout(timeout);
    if(!propicData || propicData.url.match('fallback.png')){
      console.log('propic response error!')
      propicUrl.set(defaultUrl);
    }else{
      propicUrl.set(propicData.url);
    }
  }catch(error){
    console.log('propic timed out!')
    propicUrl.set(defaultUrl);
  }
}