import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: false,
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
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
