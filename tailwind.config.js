/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "primary":        "rgb(var(--primary))",
        "background":     "rgb(var(--background))",
        "on-background":  "rgb(var(--on-background))",
        "on-primary":     "rgb(var(--on-primary))"
      }
    },
  },
  plugins: [],
}

