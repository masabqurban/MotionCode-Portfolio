/** @type {import('tailwindcss').Config} */
export default {
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
      },
    },
  },
  plugins: [],
}