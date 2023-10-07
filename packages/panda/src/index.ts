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
import {
  accentColors,
  grayColors,
  type AccentColor,
  type GrayColor,
  type PresetOptions,
} from './types'

const createPreset = (options: PresetOptions = {}): Preset => {
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

export { accentColors, createPreset, createPreset as default, grayColors }
export type { AccentColor, GrayColor, PresetOptions }
