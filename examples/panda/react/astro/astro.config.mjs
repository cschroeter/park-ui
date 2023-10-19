import react from '@astrojs/react'
import pandacss from '@pandacss/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [react(), pandacss()],
})
