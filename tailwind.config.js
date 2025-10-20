module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
