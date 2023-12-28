import { borders } from './borders'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { components } from './components'
import { config } from './config'
import { direction } from './direction'
import { fontSizes } from './font-sizes'
import { fontWeights } from './font-weights'
import { fonts } from './fonts'
import { letterSpacings } from './letter-spacing'
import { lineHeights } from './line-heights'
import { aliases, radii } from './radii'
import { semanticTokens } from './semantic-tokens'
import { sizes } from './sizes'
import { space } from './space'
import { styles } from './styles'
import { textStyles } from './text-styles'
import { transition } from './transition'
import type { Options } from './types'
import { zIndices } from './z-indices'

const defaultOptions: Options = {
  accentColor: 'neutral',
  grayColor: 'neutral',
  borderRadius: 'sm',
}

export const createTheme = (options: Options = defaultOptions) => {
  const { accentColor, grayColor, borderRadius = 'sm' } = options
  return {
    borders,
    breakpoints,
    colors,
    components,
    config,
    direction,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii: {
      ...radii,
      ...aliases[borderRadius],
    },
    semanticTokens: {
      ...semanticTokens,
      colors: {
        ...semanticTokens.colors,
        gray: semanticTokens.colors[grayColor],
        accent: semanticTokens.colors[accentColor],
      },
    },
    shadows: {},
    sizes,
    space,
    styles,
    textStyles,
    transition,
    zIndices,
  }
}
