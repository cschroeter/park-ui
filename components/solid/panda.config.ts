import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/preset-base', createPreset({ additionalColors: ['red', 'green', 'blue'] })],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'solid',
  outdir: 'styled-system',
  staticCss: {
    recipes: {
      input: ['*'],
    },
  },
})
