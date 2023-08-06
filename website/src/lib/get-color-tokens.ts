import { semanticTokens } from '@park-ui/presets/src/theme/semantic-tokens'
import { type Token } from 'styled-system/tokens'

export type ColorToken = {
  name: string
  value: {
    base: string
    _dark: string
  }
  color: Token
  background: Token
}

export type ColorTokenGroup = {
  key: 'bg' | 'fg'
  tokens: ColorToken[]
}

export const getColorTokens = () =>
  Object.entries(semanticTokens.colors)
    .filter(([key]) => ['bg', 'fg'].includes(key))
    .map(([key, value]) => {
      return {
        key,
        tokens: Object.entries(value).map(([name, color]) => ({
          name: `${key}.${name}`,
          value: {
            base: color.value.base.replace('{colors.', '').replace('}', ''),
            _dark: color.value._dark.replace('{colors.', '').replace('}', ''),
          },
          background: `colors.${key}.${name}`,
          color: isDarkColor(color.value.base) ? 'colors.bg.default' : 'colors.fg.default',
        })),
      } as ColorTokenGroup
    })

const isDarkColor = (color: string) => {
  const value = Number(color.replace('{colors.', '').replace('}', '').split('.')[1])
  return value >= 500
}
