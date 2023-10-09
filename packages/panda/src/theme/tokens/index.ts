import { defineTokens } from '@pandacss/dev'
import type { PresetOptions } from '../../types'
import { animations } from './animations'
import { blurs } from './blurs'
import { borders } from './borders'
import { defineColorTokens } from './colors'
import { easings } from './easings'
import { radii } from './radii'
import { sizes } from './sizes'
import { spacing } from './spacing'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography'
import { zIndex } from './z-index'

export const createTokens = (options: PresetOptions) => {
  return defineTokens({
    animations,
    blurs,
    borders,
    colors: defineColorTokens(options),
    easings,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii,
    sizes,
    spacing,
    zIndex,
  })
}
