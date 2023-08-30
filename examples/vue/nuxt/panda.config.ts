import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', '@park-ui/presets'],
  include: ['./components/**/*.{js,jsx,ts,tsx,vue}', './pages/**/*.{js,jsx,ts,tsx,vue}'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'vue',
})
