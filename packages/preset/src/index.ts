import { definePlugin, definePreset } from '@pandacss/dev'
import { recipes, slotRecipes } from './recipes'
import { animationStyles } from './theme/animation-styles'
import { colors as colorPalettes } from './theme/colors'
import { conditions } from './theme/conditions'
import { globalCss } from './theme/global-css'
import { keyframes } from './theme/keyframes'
import { layerStyles } from './theme/layer-styles'
import { textStyles } from './theme/text-styles'
import { colors } from './theme/tokens/colors'
import { durations } from './theme/tokens/durations'
import { shadows } from './theme/tokens/shadows'
import { zIndex } from './theme/tokens/z-index'

export const preset = definePreset({
  name: '@park-ui/preset',
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  globalCss,
  conditions,
  theme: {
    extend: {
      animationStyles,
      recipes,
      slotRecipes,
      keyframes,
      layerStyles,
      textStyles,
      tokens: {
        colors,
        durations,
        zIndex,
      },
      semanticTokens: {
        colors: {
          ...colorPalettes,
          gray: colorPalettes.neutral,
          // aliases
          fg: {
            default: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } },
            muted: { value: { _light: '{colors.gray.11}', _dark: '{colors.gray.11}' } },
            subtle: { value: { _light: '{colors.gray.10}', _dark: '{colors.gray.10}' } },
          },
          // deprecated
          border: {
            default: { value: { _light: '{colors.gray.a7}', _dark: '{colors.gray.a7}' } },
            muted: { value: { _light: '{colors.gray.a6}', _dark: '{colors.gray.a6}' } },
            subtle: { value: { _light: '{colors.gray.a4}', _dark: '{colors.gray.a4}' } },
            outline: { value: { _light: '{colors.gray.a9}', _dark: '{colors.gray.a9}' } },
            error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
          },
          bg: {
            default: { value: { _light: 'white', _dark: '{colors.gray.1}' } },
            subtle: { value: { _light: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
            muted: { value: { _light: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
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
})

export const plugin = definePlugin({
  name: 'Remove Panda Preset Colors',
  hooks: {
    'preset:resolved': ({ utils, preset, name }) =>
      name === '@pandacss/preset-panda'
        ? utils.omit(preset, ['theme.tokens.colors', 'theme.semanticTokens.colors'])
        : preset,
  },
})
