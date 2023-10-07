import { defineSemanticTokens } from '@pandacss/dev'
import { match } from 'ts-pattern'
import type { AccentColor, GrayColor, PresetOptions } from '../../types'
import { colors } from './colors'

export const createSemanticTokens = (options: PresetOptions) => {
  const { accentColor = 'neutral', grayColor = 'neutral' } = options

  return defineSemanticTokens({
    colors: {
      ...colors,
      gray: createColorPalette(grayColor),
      accent: createAccentColorPalette(accentColor),
      bg: {
        canvas: { value: '{colors.gray.1}' },
        default: { value: { base: '{colors.white}', _dark: '{colors.gray.2}' } },
        subtle: { value: '{colors.gray.2}' },
        muted: { value: '{colors.gray.4}' },
        emphasized: { value: '{colors.gray.4}' },
        disabled: { value: '{colors.gray.3}' },
      },
      fg: {
        default: { value: '{colors.gray.12}' },
        emphasized: { value: '{colors.gray.12}' },
        muted: { value: '{colors.gray.11}' },
        subtle: { value: '{colors.gray.10}' },
        disabled: { value: '{colors.gray.7}' },
      },
      border: {
        default: { value: '{colors.gray.6}' },
        emphasized: { value: '{colors.gray.7}' },
        muted: { value: '{colors.gray.3}' },
        accent: { value: '{colors.accent.default}' },
        disabled: { value: '{colors.gray.6}' },
      },
    },
    shadows: {
      accent: {
        value: '0 0 0 1px {colors.border.accent}',
      },
      outline: {
        value: '0 0 0 1px {colors.border.outline}',
      },
      xs: {
        value: {
          base: '0px 1px 2px rgba(23, 23, 23,  0.1)',
          _dark: '0px 1px 2px rgba(0, 0, 0, 1.0)',
        },
      },
      sm: {
        value: {
          base: '0px 2px 4px rgba(23, 23, 23,  0.1)',
          _dark: '0px 2px 4px rgba(0, 0, 0, 1.0)',
        },
      },
      md: {
        value: {
          base: '0px 4px 8px rgba(23, 23, 23,  0.1)',
          _dark: '0px 4px 8px rgba(0, 0, 0, 1.0)',
        },
      },
      lg: {
        value: {
          base: '0px 8px 16px rgba(23, 23, 23,  0.1)',
          _dark: '0px 8px 16px rgba(0, 0, 0, 1.0)',
        },
      },
      xl: {
        value: {
          base: '0px 16px 24px rgba(23, 23, 23,  0.1)',
          _dark: '0px 16px 24px rgba(0, 0, 0, 1.0)',
        },
      },
    },
    radii: {
      l1: { value: '{radii.xs}' },
      l2: { value: '{radii.sm}' },
      l3: { value: '{radii.md}' },
    },
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
      fg: { value: '{colors.black}' },
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
    }),
    {},
  )
