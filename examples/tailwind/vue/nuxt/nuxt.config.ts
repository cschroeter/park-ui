export default defineNuxtConfig({
  css: ['@/assets/css/global.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
