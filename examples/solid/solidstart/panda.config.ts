import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', '@park-ui/presets'],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          bg: {
            canvas: {
              value: { base: '{colors.gray-palette.50}', _dark: '{colors.gray-palette.900}' },
            },
          },
        },
      },
    },
  },
  jsxFramework: 'solid',
  outdir: 'styled-system',
})
