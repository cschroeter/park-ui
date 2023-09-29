import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import pandacss from '@pandacss/astro'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://park-ui.com',
  integrations: [mdx(), pandacss(), react(), sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
})
