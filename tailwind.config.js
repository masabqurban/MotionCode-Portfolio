/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'], // Add Lexend font
        LeagueSpartan: ['League Spartan', 'sans-serif'], // Add League Spartan font
        Poppins: ['Poppins', 'sans-serif'], // Add Poppins font
        Roboto: ['Roboto', 'sans-serif'], // Add Roboto font
        PlayfairDisplay: ['Playfair Display', 'serif'], // Add Playfair Display font
        OpenSans: ['Open Sans', 'sans-serif'], // Add Open Sans font
        Figtree: ['Figtree', 'sans-serif'], // Add Figtree font
        HubotSans: ['Hubot Sans', 'sans-serif'], // Add Hubot Sans font
        GideonRoman: ['Gideon Roman', 'sans-serif'], // Add Gideon Roman font
      },
    },
  },
  plugins: [],
}