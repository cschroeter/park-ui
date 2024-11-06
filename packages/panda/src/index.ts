import { type SemanticTokens, type Tokens, definePreset } from '@pandacss/dev'
import { conditions } from './conditions'
import { globalCss } from './global-css'
import { breakpoints } from './theme/breakpoints'
import { keyframes } from './theme/keyframes'
import { recipes, slotRecipes } from './theme/recipes'
import { semanticTokens } from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import { tokens } from './theme/tokens'

export interface ColorPalette {
  name: string
  tokens: Tokens['colors']
  semanticTokens: SemanticTokens['colors']
}

export interface PresetOptions {
  colors: {
    gray: ColorPalette
    accent: ColorPalette
  }
}

export const createPreset = (options: PresetOptions) => {
  const { gray, accent } = options.colors

  return definePreset({
    name: '@park-ui/panda-preset',
    conditions,
    globalCss,
    theme: {
      extend: {
        breakpoints,
        keyframes,
        recipes,
        slotRecipes,
        semanticTokens: {
          ...semanticTokens,
          colors: {
            ...semanticTokens.colors,
            [gray.name]: gray.semanticTokens,
            [accent.name]: accent.semanticTokens,
            gray: gray.semanticTokens ?? {},
            accent: accent.semanticTokens ?? {},
          },
        },
        textStyles,
        tokens: {
          ...tokens,
          colors: {
            ...tokens.colors,
            [gray.name]: gray.tokens,
            [accent.name]: accent.tokens,
          },
        },
      },
    },
  })
}
