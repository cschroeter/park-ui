import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import pandacss from '@pandacss/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://park-ui.com',
  integrations: [mdx(), pandacss(), react(), sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/styled-system/**/*'],
      },
    },
  },
})
