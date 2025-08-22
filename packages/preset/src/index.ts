import { definePlugin, definePreset } from '@pandacss/dev'
import { blue } from './colors/blue'
import { neutral } from './colors/neutral'
import { recipes, slotRecipes } from './recipes'

export const preset = definePreset({
  name: '@park-ui/preset',
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  globalCss: {
    html: {
      colorPalette: 'blue',
      '*, *::before, *::after': {
        borderColor: 'border.subtle',
        borderStyle: 'solid',
        boxSizing: 'border-box',
      },
    },
    body: {
      background: 'gray.1',
    },
  },
  conditions: {
    extend: {
      light: ':root &, .light &',
    },
  },
  theme: {
    extend: {
      recipes,
      slotRecipes,
      semanticTokens: {
        colors: {
          gray: neutral,
          blue,
          fg: {
            default: { value: '{colors.gray.12}' },
            muted: { value: '{colors.gray.11}' },
            subtle: { value: '{colors.gray.10}' },
          },
          border: {
            default: { value: '{colors.gray.7}' },
            muted: { value: '{colors.gray.6}' },
            subtle: { value: '{colors.gray.4}' },
          },
          bg: {
            default: { value: 'white' },
          },
        },
      },
    },
  },
  staticCss: {
    recipes: '*',
  },
})

export const plugin = definePlugin({
  name: 'Kill Colors',
  hooks: {
    'preset:resolved': ({ utils, preset, name }) => {
      if (name === '@pandacss/preset-panda') {
        return utils.omit(preset, ['theme.tokens.colors', 'theme.semanticTokens.colors'])
      }
      return preset
    },
  },
})
