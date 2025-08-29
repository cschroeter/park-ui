import { definePlugin, definePreset } from '@pandacss/dev'
import { colors as colorPalettes } from './colors'
import { recipes, slotRecipes } from './recipes'
import { animationStyles } from './theme/animation-styles'
import { keyframes } from './theme/keyframes'
import { shadows } from './theme/semantic-tokens/shadows'
import { colors } from './theme/tokens/colors'
import { durations } from './theme/tokens/durations'
import { easings } from './theme/tokens/easings'
import { zIndex } from './theme/tokens/z-index'

export const preset = definePreset({
  name: '@park-ui/preset',
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  globalCss: {
    extend: {
      '*, *::before, *::after': {
        borderColor: 'border.subtle',
      },
      body: {
        background: 'gray.1',
        color: 'fg.default',
      },
      '*::selection': {
        bg: 'colorPalette.a3',
      },
    },
  },
  conditions: {
    extend: {
      light: ':root &, .light &',
    },
  },
  theme: {
    extend: {
      animationStyles,
      recipes,
      slotRecipes,
      keyframes,
      tokens: {
        colors,
        easings,
        durations,
        zIndex,
      },
      semanticTokens: {
        colors: {
          ...colorPalettes,
          gray: colorPalettes.neutral,
          fg: {
            default: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } },
            muted: { value: { _light: '{colors.gray.11}', _dark: '{colors.gray.11}' } },
            subtle: { value: { _light: '{colors.gray.10}', _dark: '{colors.gray.10}' } },
            disabled: { value: { _light: '{colors.gray.9}', _dark: '{colors.gray.9}' } },
          },
          border: {
            default: { value: { _light: '{colors.gray.a7}', _dark: '{colors.gray.a7}' } },
            muted: { value: { _light: '{colors.gray.a6}', _dark: '{colors.gray.a6}' } },
            subtle: { value: { _light: '{colors.gray.a3}', _dark: '{colors.gray.a3}' } },
            outline: { value: { _light: '{colors.gray.a9}', _dark: '{colors.gray.a9}' } },
          },
          bg: {
            default: { value: { _light: 'white', _dark: '{colors.gray.1}' } },
          },
        },
        shadows,
        radii: {
          l1: { value: '{radii.xs}' },
          l2: { value: '{radii.sm}' },
          l3: { value: '{radii.md}' },
        },
      },
    },
  },
  staticCss: {
    recipes: '*',
    css: [
      {
        properties: {
          boxShadow: ['*'],
          borderRadius: ['*'],
        },
      },
    ],
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
