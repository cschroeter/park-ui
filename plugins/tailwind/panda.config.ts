import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  preflight: false,
  presets: ['@pandacss/preset-base', createPreset({ additionalColors: ['*'] })],
  outdir: 'styled-system',
  staticCss: {
    recipes: '*',
    css: [
      {
        properties: {
          fontWeight: ['*'],
          textStyle: ['*'],
        },
      },
    ],
  },
})
