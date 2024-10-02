/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lemonade", "dim", "winter", "coffee", "retro", "synthwave", "cyberpunk", "aqua"], // Add all themes you might use
  },
}

