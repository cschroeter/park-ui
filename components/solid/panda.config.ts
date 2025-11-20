import { defineConfig } from '@pandacss/dev'
import { plugin, preset } from '@park-ui/preset'

export default defineConfig({
  presets: [preset],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  jsxFramework: 'solid',
  plugins: [plugin],
  globalCss: {
    extend: {
      html: {
        colorPalette: 'neutral',
      },
    },
  },
  staticCss: {
    recipes: '*',
  },
})
