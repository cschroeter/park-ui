import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import { conditions } from './conditions'
import { globalCss } from './global-css'
import { breakpoints } from './theme/breakpoints'
import { keyframes } from './theme/keyframes'
import { recipes, slotRecipes } from './theme/recipes'
import { semanticTokens } from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import { tokens } from './theme/tokens'

const preset: Preset = definePreset({
  theme: {
    extend: {
      breakpoints,
      keyframes,
      recipes,
      semanticTokens,
      slotRecipes,
      textStyles,
      tokens,
    },
  },
  conditions,
  globalCss,
})

export default preset
