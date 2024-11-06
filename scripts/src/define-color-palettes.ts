import { defineTokens } from '@pandacss/dev'
import * as radixColors from '@radix-ui/colors'
import { match } from 'ts-pattern'
import type { PresetOptions } from '../../../types'

export const defineColorPalettes = (options: PresetOptions) => {
  const { grayColor = 'neutral', accentColor = 'neutral', additionalColors = [] } = options
  const availableColors = ['gray', 'red', grayColor, accentColor, ...additionalColors]

  return Object.fromEntries(
    [...Object.keys(radixColors), 'neutral']
      .filter((color) => !/[A-Z]/.test(color))
      .filter((color) => color !== 'default')
      .filter((color) => additionalColors.includes('*') || availableColors.includes(color))
      .map((color) =>
        match(color)
          .with('gray', () => [
            color,
            defineColorPalette(grayColor === 'neutral' ? 'gray' : grayColor),
          ])
          .with('neutral', () => [color, defineColorPalette('gray')])
          .otherwise(() => [color, defineColorPalette(color)]),
      ),
  )
}

const defineColorPalette = (color: string) => {
  const colorObj = Object.fromEntries(
    Object.keys(radixColors)
      .filter((key) => key.startsWith(color))
      .filter((key) => !/\d/.test(key))
      .map((key) => {
        // @ts-expect-error
        const tokens = toColorTokens(color, radixColors[key])
        return [key, tokens]
      }),
  )

  return defineTokens.colors(
    Object.keys(colorObj).reduce(
      (acc, key) => {
        const target = key.includes('Dark') ? 'dark' : 'light'
        acc[target] = { ...acc[target], ...colorObj[key] }
        return acc
      },
      { light: {}, dark: {} },
    ),
  )
}

interface Token<T> {
  value: T
  description?: string
}

const toColorTokens = (
  color: string,
  scale: Record<string, string>,
): Record<string, Token<string>> => {
  return Object.fromEntries(
    Object.keys(scale).map((key) => {
      const value = scale[key]
      const name = key.replace(color, '').toLowerCase()
      return [name, { value }]
    }),
  )
}
