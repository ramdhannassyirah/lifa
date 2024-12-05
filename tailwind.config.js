/** @type {import('tailwindcss').Config} */
module.exports = {
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
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0, 0, 0, 1)', // Bayangan brutal
        'brutal-light': '2px 2px 0px 0px rgba(0, 0, 0, 0.5)', // Bayangan ringan
      },
      borderRadius: {
        brutal: '8px', // Sedikit membulat untuk elemen neubrutal
      },
      colors: {
        primary: '#ff6f61', // Contoh warna cerah
        secondary: '#61ff6f',
        accent: '#6f61ff',
      },
    },
  },
  plugins: [],
}