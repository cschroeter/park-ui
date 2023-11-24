import { colors } from './colors'
import { shadows } from './shadows'

const createColorPalette = (name: string) =>
  Array.from({ length: 12 }, (_, i) => i + 1).reduce(
    (acc, scale) => ({
      ...acc,
      [scale]: `${name}.${scale}`,
      ['a' + scale]: `${name}.a${scale}`,
    }),
    {},
  )

export const semanticTokens = {
  colors: {
    ...colors,
    'accent.default': 'amber.9',
    accent: {
      ...createColorPalette('amber'),
      fg: 'sand.light.12',
      emphasized: 'amber.10',
    },

    'border.default': 'gray.7',
    border: {
      muted: 'gray.6',
      subtle: 'gray.4',
      disabled: 'gray.5',
      outline: 'gray.a9',
      accent: 'amber.9',
    },

    gray: createColorPalette('sand'),
  },
  shadows,
}
