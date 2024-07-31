import { type Preset, definePreset } from '@pandacss/dev'
import { conditions } from './conditions'
import { globalCss } from './global-css'
import { breakpoints } from './theme/breakpoints'
import { keyframes } from './theme/keyframes'
import { recipes, slotRecipes } from './theme/recipes'
import { createSemanticTokens } from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import { createTokens } from './theme/tokens'
import {
  type AccentColor,
  type BorderRadius,
  type GrayColor,
  type PresetOptions,
  accentColors,
  borderRadii,
  grayColors,
} from './types'

const defaultOptions: PresetOptions = {
  accentColor: 'neutral',
  additionalColors: [],
  borderRadius: 'sm',
  grayColor: 'neutral',
}

const createPreset = (options: PresetOptions = defaultOptions): Preset => {
  const semanticTokens = createSemanticTokens(options)
  const tokens = createTokens(options)

  return definePreset({
    name: '@park-ui/panda-preset',
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

export { accentColors, borderRadii, createPreset, defaultPreset as default, grayColors }
export type { AccentColor, BorderRadius, GrayColor, PresetOptions }
