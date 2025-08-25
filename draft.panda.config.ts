import { defineConfig } from '@pandacss/dev'
import { black, blue, slate, white } from './colors'
import { recipes, slotRecipes } from './recipes'
import { shadows } from './shadows'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  outdir: 'styled-system',

  globalCss: {
    extend: {
      html: {
        colorPalette: 'blue',
        '--global-color-border': 'colors.gray.6',
        '--global-color-placeholder': 'colors.gray.7',
        '--global-color-selection': 'colors.gray.a3',
      },
      body: {
        background: 'gray.1',
        color: 'fg.default',
      },
    },
  },

  theme: {
    extend: {
      recipes,
      slotRecipes,
      tokens: {
        colors: {
          black,
          white,
        },
      },
      semanticTokens: {
        shadows,
        colors: {
          blue,
          slate,
          fg: {
            default: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } },
            muted: { value: { _light: '{colors.gray.11}', _dark: '{colors.gray.11}' } },
            subtle: { value: { _light: '{colors.gray.10}', _dark: '{colors.gray.10}' } },
            disabled: { value: { _light: '{colors.gray.9}', _dark: '{colors.gray.9}' } },
          },
          border: {
            default: { value: { _light: '{colors.gray.7}', _dark: '{colors.gray.7}' } },
            muted: { value: { _light: '{colors.gray.6}', _dark: '{colors.gray.6}' } },
            subtle: { value: { _light: '{colors.gray.4}', _dark: '{colors.gray.4}' } },
          },
          bg: {
            default: { value: { _light: 'white', _dark: '{colors.gray.1}' } },
          },
        },
        radii: {
          l1: { value: '{radii.xs}' },
          l2: { value: '{radii.sm}' },
          l3: { value: '{radii.md}' },
        },
      },
    },
  },

  conditions: {
    extend: {
      light: ':root &, .light &',
    },
  },

  hooks: {
    'preset:resolved': ({ utils, preset, name }) => {
      if (name === '@pandacss/preset-panda') {
        return utils.omit(preset, ['theme.tokens.colors', 'theme.semanticTokens.colors'])
      }
      return preset
    },
  },
})
