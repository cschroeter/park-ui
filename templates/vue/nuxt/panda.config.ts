import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
  include: ['./components/**/*.{js,jsx,ts,tsx,vue}', './pages/**/*.{js,jsx,ts,tsx,vue}', 'app.vue'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'vue',
})
