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
        subtle: { value: '{colors.gray.2}' },
        muted: { value: '{colors.gray.3}' },
        emphasized: { value: '{colors.gray.4}' },
        disabled: { value: '{colors.gray.3}' },
      },
      fg: {
        default: { value: '{colors.gray.12}' },
        emphasized: { value: '{colors.gray.12}' },
        muted: { value: '{colors.gray.11}' },
        subtle: { value: '{colors.gray.10}' },
        disabled: { value: '{colors.gray.8}' },
      },
      border: {
        default: { value: '{colors.gray.a4}' },
        emphasized: { value: '{colors.gray.a7}' },
        outline: { value: '{colors.gray.a9}' },
        accent: { value: '{colors.accent.default}' },
        disabled: { value: '{colors.gray.a6}' },
      },
    },
    shadows,
    radii: createRadiiTokens(borderRadius),
  })
}

const createAccentColorPalette = (accentColor: AccentColor) => {
  const tokens = match(accentColor)
    .with('neutral', () => ({
      fg: { value: { base: '{colors.white}', _dark: '{colors.black}' } },
      default: { value: { base: '{colors.black}', _dark: '{colors.white}' } },
      emphasized: { value: '{colors.gray.12}' },
    }))
    .with('amber', 'lime', 'mint', 'sky', 'yellow', () => ({
      fg: { value: '{colors.gray.light.12}' },
      default: { value: '{colors.accent.9}' },
      emphasized: { value: '{colors.accent.10}' },
    }))
    .otherwise(() => ({
      fg: { value: '{colors.white}' },
      default: { value: '{colors.accent.9}' },
      emphasized: { value: '{colors.accent.10}' },
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
