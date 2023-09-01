import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  alias: {
    'styled-system': resolve('./styled-system'),
  },

  css: ['@/assets/css/global.css'],

  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {},
    },
  },
})
