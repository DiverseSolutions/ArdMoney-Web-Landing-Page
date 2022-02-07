module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#130E22',
        'primary-mini': "#1A162A",
        'polygon': '#6C1BAF',
        'bsc': '#F64D15',

      }
    },
  },
  plugins: [],
}
