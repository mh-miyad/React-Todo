/** @type {import('tailwindcss').Config} */
export default {
  darkMode: `media ` || `false`,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
