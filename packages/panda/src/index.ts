import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import { conditions } from './conditions'
import { globalCss } from './global-css'
import { breakpoints } from './theme/breakpoints'
import { keyframes } from './theme/keyframes'
import { recipes, slotRecipes } from './theme/recipes'
import { createSemanticTokens } from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import { tokens } from './theme/tokens'
import type { PresetOptions } from './types'

export const createPreset = (options: PresetOptions = {}): Preset => {
  const semanticTokens = createSemanticTokens(options)
  return definePreset({
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
}

export default createPreset

export type { PresetOptions }
