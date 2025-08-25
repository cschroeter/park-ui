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
      color: 'fg.default',
    },
    '*::selection': {
      bg: 'colorPalette.a3',
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
      tokens: {
        colors: {
          black: {
            DEFAULT: { value: '#000000' },
            a1: { value: 'rgba(0, 0, 0, 0.05)' },
            a2: { value: 'rgba(0, 0, 0, 0.1)' },
            a3: { value: 'rgba(0, 0, 0, 0.15)' },
            a4: { value: 'rgba(0, 0, 0, 0.2)' },
            a5: { value: 'rgba(0, 0, 0, 0.3)' },
            a6: { value: 'rgba(0, 0, 0, 0.4)' },
            a7: { value: 'rgba(0, 0, 0, 0.5)' },
            a8: { value: 'rgba(0, 0, 0, 0.6)' },
            a9: { value: 'rgba(0, 0, 0, 0.7)' },
            a10: { value: 'rgba(0, 0, 0, 0.8)' },
            a11: { value: 'rgba(0, 0, 0, 0.9)' },
            a12: { value: 'rgba(0, 0, 0, 0.95)' },
          },
          white: {
            DEFAULT: { value: '#ffffff' },
            a1: { value: 'rgba(255, 255, 255, 0.05)' },
            a2: { value: 'rgba(255, 255, 255, 0.1)' },
            a3: { value: 'rgba(255, 255, 255, 0.15)' },
            a4: { value: 'rgba(255, 255, 255, 0.2)' },
            a5: { value: 'rgba(255, 255, 255, 0.3)' },
            a6: { value: 'rgba(255, 255, 255, 0.4)' },
            a7: { value: 'rgba(255, 255, 255, 0.5)' },
            a8: { value: 'rgba(255, 255, 255, 0.6)' },
            a9: { value: 'rgba(255, 255, 255, 0.7)' },
            a10: { value: 'rgba(255, 255, 255, 0.8)' },
            a11: { value: 'rgba(255, 255, 255, 0.9)' },
            a12: { value: 'rgba(255, 255, 255, 0.95)' },
          },
        },
      },
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
        spacing: {
          4.5: { value: '1.125rem' },
        },
        radii: {
          l1: { value: '{radii.xs}' },
          l2: { value: '{radii.sm}' },
          l3: { value: '{radii.md}' },
        },
        shadows: {
          xs: {
            value: {
              _light: '0px 1px 2px {colors.gray.a5}, 0px 0px 1px {colors.gray.a7}',
              _dark: '0px 1px 1px {colors.black.a12}, 0px 0px 1px inset {colors.gray.a7}',
            },
          },
          sm: {
            value: {
              _light: '0px 2px 4px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
              _dark: '0px 2px 4px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
            },
          },
          md: {
            value: {
              _light: '0px 4px 8px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
              _dark: '0px 4px 8px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
            },
          },
          lg: {
            value: {
              _light: '0px 8px 16px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
              _dark: '0px 8px 16px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
            },
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
