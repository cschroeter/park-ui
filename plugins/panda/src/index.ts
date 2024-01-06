import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import { conditions } from './conditions'
import { globalCss } from './global-css'
import { breakpoints } from './theme/breakpoints'
import { keyframes } from './theme/keyframes'
import { recipes, slotRecipes } from './theme/recipes'
import { createSemanticTokens } from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import { createTokens } from './theme/tokens'
import {
  accentColors,
  borderRadii,
  grayColors,
  jsxFrameworks,
  type AccentColor,
  type BorderRadius,
  type GrayColor,
  type JSXFramework,
  type PresetOptions,
} from './types'

const defaultOptions: PresetOptions = {
  accentColor: 'neutral',
  borderRadius: 'sm',
  grayColor: 'neutral',
}

const createPreset = (options: PresetOptions = defaultOptions): Preset => {
  const semanticTokens = createSemanticTokens(options)
  const tokens = createTokens(options)

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

const defaultPreset = createPreset()

export {
  accentColors,
  borderRadii,
  createPreset,
  defaultPreset as default,
  grayColors,
  jsxFrameworks,
}
export type { AccentColor, BorderRadius, GrayColor, JSXFramework, PresetOptions }
