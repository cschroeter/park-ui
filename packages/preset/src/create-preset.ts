import { type SemanticTokens, Tokens, definePreset } from '@pandacss/dev'
import red from './colors/red'
import type { PresetOptions } from './options'
import { breakpoints } from './theme/breakpoints'
import { conditions } from './theme/conditions'
import { globalCss } from './theme/global-css'
import { keyframes } from './theme/keyframes'
import { recipes, slotRecipes } from './theme/recipes'
import { semanticTokens } from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import { tokens } from './theme/tokens'
import { createRadii } from './utils/create-radii'

export const createPreset = (options: PresetOptions) => {
  const { accentColor, grayColor, radius, additionalColors = [] } = options

  const standardizeGrayTokens = (tokens: SemanticTokens['colors']) =>
    JSON.parse(JSON.stringify(tokens).replace(new RegExp(grayColor.name, 'g'), 'gray'))

  const addlColorTokens = additionalColors.reduce((acc, color) => {
    acc[color.name] = color.tokens
    return acc
  }, {} as {[name:string]: Tokens['colors']})

  const addlColorSemanticTokens = additionalColors.reduce((acc, color) => {
    acc[color.name] = color.semanticTokens
    return acc
  }, {} as {[name:string]: SemanticTokens['colors']})

  return definePreset({
    name: '@park-ui/panda-preset',
    presets: ['@pandacss/preset-base'],
    conditions,
    globalCss: {
      ...globalCss,
      html: {
        colorPalette: accentColor.name,
      },
    },
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
            red: red.tokens,
            ...addlColorTokens,
            gray: grayColor.tokens ?? {},
            [accentColor.name]: accentColor.tokens,
          },
        },
        semanticTokens: {
          ...semanticTokens,
          colors: {
            ...semanticTokens.colors,
            red: red.semanticTokens,
            ...addlColorSemanticTokens,
            gray: standardizeGrayTokens(grayColor.semanticTokens),
            [accentColor.name]: accentColor.semanticTokens,
          },
          radii: createRadii(radius),
        },
      },
    },
  })
}
