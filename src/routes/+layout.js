export const prerender = true;

export const load = async ({ url }) => {
  return { path: url.pathname };
};