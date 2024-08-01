import { defineSemanticTokens } from '@pandacss/dev'
import type { PresetOptions } from '../../types'
import { colors } from './colors'
import { createRadiiTokens } from './radii'
import { shadows } from './shadows'

export const createSemanticTokens = (options: PresetOptions) => {
  const {
    accentColor = 'neutral',
    additionalColors = [],
    borderRadius = 'sm',
    grayColor = 'neutral',
  } = options

  const availableColors = [grayColor, accentColor, 'red', ...additionalColors]
  const extraColors = Object.fromEntries(
    Object.entries(colors).filter(
      ([color]) => availableColors.includes('*') || availableColors.includes(color),
    ),
  )

  return defineSemanticTokens({
    colors: {
      ...extraColors,
      gray: colors[grayColor],
      accent: colors[accentColor],
      bg: {
        canvas: { value: { _light: '{colors.gray.1}', _dark: '{colors.gray.1}' } },
        default: { value: { _light: 'white', _dark: '{colors.gray.2}' } },
        subtle: { value: { _light: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
        muted: { value: { _light: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
        emphasized: { value: { _light: '{colors.gray.4}', _dark: '{colors.gray.5}' } },
        disabled: { value: { _light: '{colors.gray.5}', _dark: '{colors.gray.6}' } },
      },
      fg: {
        default: { value: { _light: '{colors.gray.12}', _dark: '{colors.gray.12}' } },
        muted: { value: { _light: '{colors.gray.11}', _dark: '{colors.gray.11}' } },
        subtle: { value: { _light: '{colors.gray.10}', _dark: '{colors.gray.10}' } },
        disabled: { value: { _light: '{colors.gray.9}', _dark: '{colors.gray.9}' } },
        error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
      },
      border: {
        default: { value: { _light: '{colors.gray.7}', _dark: '{colors.gray.7}' } },
        muted: { value: { _light: '{colors.gray.6}', _dark: '{colors.gray.6}' } },
        subtle: { value: { _light: '{colors.gray.4}', _dark: '{colors.gray.4}' } },
        disabled: { value: { _light: '{colors.gray.5}', _dark: '{colors.gray.5}' } },
        outline: { value: { _light: '{colors.gray.a9}', _dark: '{colors.gray.a9}' } },
        error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
      },
    },
    shadows,
    radii: createRadiiTokens(borderRadius),
  })
}
