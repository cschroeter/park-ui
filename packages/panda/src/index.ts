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

  function replaceSandWithGray(obj: any): any {
    if (typeof obj === 'string') {
      return obj.replace(gray.name, 'gray')
    }
    if (Array.isArray(obj)) {
      return obj.map(replaceSandWithGray)
    }
    if (typeof obj === 'object' && obj !== null) {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, replaceSandWithGray(value)]),
      )
    }
    return obj
  }

  return definePreset({
    name: '@park-ui/panda-preset',
    presets: ['@pandacss/preset-base'],
    conditions,
    globalCss,
    theme: {
      extend: {
        breakpoints,
        keyframes,
        recipes,
        slotRecipes,
        textStyles,
        tokens: {
          ...tokens,
          colors: {
            ...tokens.colors,
            gray: gray.tokens ?? {},
            [accent.name]: accent.tokens,
          },
        },
        semanticTokens: {
          ...semanticTokens,
          colors: {
            ...semanticTokens.colors,
            [accent.name]: accent.semanticTokens,
            gray: replaceSandWithGray(gray.semanticTokens),
          },
        },
      },
    },
  })
}
