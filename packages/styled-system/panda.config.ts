import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/preset'
import neutral from '@park-ui/preset/colors/neutral'

export default defineConfig({
  presets: [
    '@pandacss/preset-panda',
    createPreset({ accentColor: neutral, grayColor: neutral, radius: 'sm' }),
  ],
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  outdir: 'dist',
  jsxFramework: 'react',
  staticCss: {
    recipes: '*',
  },
})
