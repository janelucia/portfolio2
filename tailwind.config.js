/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary:  '#95D2B3', // mittleres Grün
        secondary: '#E1CBA8', // mittleres Beige
        accent: '#81BFBF', // mittleres Cyan
        neutral: '#D1D5DB', // hellgrau
        background: '#F3F4F6', // sehr helles Grau
        text: {
          light: '#1F2937', // sehr dunkles Grau für Text auf hellen Hintergründen
          dark: '#FFFFFF', // weiß für Text auf dunklen Hintergründen
        }
      },
    },
  },
  plugins: [],
}
