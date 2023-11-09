import { defineSemanticTokens } from '@pandacss/dev'
import { match } from 'ts-pattern'
import type { AccentColor, GrayColor, PresetOptions } from '../../types'
import { colors } from './colors'
import { createRadiiTokens } from './radii'
import { shadows } from './shadows'

export const createSemanticTokens = (options: PresetOptions) => {
  const { accentColor = 'neutral', grayColor = 'neutral', borderRadius = 'sm' } = options

  return defineSemanticTokens({
    colors: {
      ...colors,
      gray: createColorPalette(grayColor),
      accent: createAccentColorPalette(accentColor),
      bg: {
        canvas: { value: '{colors.gray.1}' },
        default: { value: { base: '{colors.white}', _dark: '{colors.gray.2}' } },
        subtle: { value: { base: '{colors.gray.2}', _dark: '{colors.gray.2}' } },
        muted: { value: { base: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
        emphasized: { value: { base: '{colors.gray.4}', _dark: '{colors.gray.5}' } },
        disabled: { value: { base: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
      },
      fg: {
        default: { value: '{colors.gray.12}' },
        muted: { value: '{colors.gray.11}' },
        subtle: { value: '{colors.gray.10}' },
        disabled: { value: '{colors.gray.7}' },
      },
      border: {
        default: { value: '{colors.gray.7}' },
        muted: { value: '{colors.gray.6}' },
        subtle: { value: '{colors.gray.4}' },
        disabled: { value: '{colors.gray.5}' },

        outline: { value: '{colors.gray.a9}' },
        accent: { value: '{colors.accent.default}' },
      },
    },
    shadows,
    radii: createRadiiTokens(borderRadius),
  })
}

const createAccentColorPalette = (accentColor: AccentColor) => {
  const tokens = match(accentColor)
    .with('neutral', () => ({
      default: { value: { base: '{colors.black}', _dark: '{colors.white}' } },
      emphasized: { value: '{colors.gray.12}' },
      fg: { value: { base: '{colors.white}', _dark: '{colors.black}' } },
    }))
    .with('amber', 'lime', 'mint', 'sky', 'yellow', () => ({
      default: { value: '{colors.accent.9}' },
      emphasized: { value: '{colors.accent.10}' },
      fg: { value: '{colors.gray.light.12}' },
    }))
    .otherwise(() => ({
      default: { value: '{colors.accent.9}' },
      emphasized: { value: '{colors.accent.10}' },
      fg: { value: '{colors.white}' },
    }))

  return {
    ...createColorPalette(accentColor),
    ...tokens,
  }
}

const createColorPalette = (name: GrayColor | AccentColor) =>
  Array.from({ length: 12 }, (_, i) => i + 1).reduce(
    (acc, scale) => ({
      ...acc,
      [scale]: { value: `{colors.${name}.${scale}}` },
      ['a' + scale]: { value: `{colors.${name}.a${scale}}` },
    }),
    {},
  )
