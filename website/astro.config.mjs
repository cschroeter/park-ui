import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

const VERCEL_PREVIEW_SITE =
  process.env.VERCEL_ENV !== 'production' &&
  process.env.VERCEL_URL &&
  `https://${process.env.VERCEL_URL}`

export default defineConfig({
  site: VERCEL_PREVIEW_SITE || 'https://park-ui.com',
  integrations: [mdx(), react(), sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
  redirects: {
    '/': '/docs/panda/overview/introduction',
  },
})
