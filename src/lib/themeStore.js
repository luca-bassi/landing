import { writable } from "svelte/store";
import { browser } from "$app/environment"

export const mode = writable(browser && localStorage.theme || 'dark');
mode.subscribe(value => {
  browser && (localStorage.theme = value);
});

export const schemes = writable({});