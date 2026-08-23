/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skylight: {
          blue: "#0b2265",    // Primary corporate deep blue
          gold: "#c9a050",    // Luxury accent gold
          green: "#137547",   // Brand accent green
          red: "#da291c",     // Brand accent red
          light: "#f9f9f9",   // Neutral background tint
          dark: "#222222",    // Neutral dark text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}