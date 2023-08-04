import { defineTokens } from '@pandacss/dev'
import { animations, easings } from './animations'
import { colors } from './colors'
import { lineHeights } from './line-heights'
import { zIndex } from './z-index'

export const tokens = defineTokens({
  animations,
  colors,
  easings,
  lineHeights,
  zIndex,
})
