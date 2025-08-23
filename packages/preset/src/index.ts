import { definePlugin, definePreset } from '@pandacss/dev'
import { colors } from './colors'
import { recipes, slotRecipes } from './recipes'

export const preset = definePreset({
  name: '@park-ui/preset',
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  globalCss: {
    '*, *::before, *::after': {
      borderColor: 'border.subtle',
    },
    html: {
      colorPalette: 'neutral',
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
          ...colors,
          gray: colors.neutral,
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
