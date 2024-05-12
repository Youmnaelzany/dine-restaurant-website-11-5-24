/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'beaver-clr': ' #9e7f66',
        'codGray-clr': '#111111',
        'mirage-clr': '#17192b',
        'ebonyClay-clr': '#242b37',
        'shuttleGray-clr': '#5c6779',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
