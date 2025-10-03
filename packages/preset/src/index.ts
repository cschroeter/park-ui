import { definePlugin, definePreset } from '@pandacss/dev'
import { colors as colorPalettes } from './colors'
import { recipes, slotRecipes } from './recipes'
import { animationStyles } from './theme/animation-styles'
import { keyframes } from './theme/keyframes'
import { layerStyles } from './theme/layer-styles'
import { textStyles } from './theme/text-styles'
import { colors } from './theme/tokens/colors'
import { durations } from './theme/tokens/durations'
import { easings } from './theme/tokens/easings'
import { shadows } from './theme/tokens/shadows'
import { zIndex } from './theme/tokens/z-index'

export const preset = definePreset({
  name: '@park-ui/preset',
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  globalCss: {
    extend: {
      '*, *::before, *::after': {
        borderColor: 'gray.a4',
      },
      body: {
        background: 'gray.1',
        color: 'text',
      },
      '*::selection': {
        bg: 'colorPalette.a3',
      },
      '*::placeholder': {
        opacity: 1,
        color: 'text.subtle',
      },
    },
  },
  conditions: {
    extend: {
      light: ':root &, .light &',
      invalid: '&:is(:user-invalid, [data-invalid], [aria-invalid=true])',
      hover: '&:not(:disabled):hover',
      active: '&:not(:disabled):active',
      checked:
        '&:is(:checked, [data-checked], [data-state=checked], [aria-checked=true], [data-state=indeterminate])',
      on: '&:is([data-state=on])',
    },
  },
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
        easings,
        durations,
        zIndex,
      },
      semanticTokens: {
        colors: {
          ...colorPalettes,
          gray: colorPalettes.neutral,
          // aliases
          text: {
            DEFAULT: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } },
            muted: { value: { _light: '{colors.gray.11}', _dark: '{colors.gray.11}' } },
            subtle: { value: { _light: '{colors.gray.10}', _dark: '{colors.gray.10}' } },
          },
          // deprecated
          fg: {
            default: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } },
            muted: { value: { _light: '{colors.gray.11}', _dark: '{colors.gray.11}' } },
            subtle: { value: { _light: '{colors.gray.10}', _dark: '{colors.gray.10}' } },
            disabled: { value: { _light: '{colors.gray.9}', _dark: '{colors.gray.9}' } },
            error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
          },
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
