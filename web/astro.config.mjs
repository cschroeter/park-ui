import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import pandacss from '@pandacss/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [mdx(), pandacss(), react()],
  markdown: {
    syntaxHighlight: false,
  },
})
