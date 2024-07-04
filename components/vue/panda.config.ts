import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/preset-base', createPreset()],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  jsxFramework: 'vue',
  outdir: 'styled-system',
  staticCss: {
    recipes: {
      avatar: ['*'],
      input: ['*'],
    },
  },
})
