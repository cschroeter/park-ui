import { type SemanticTokens, type Tokens, definePreset } from '@pandacss/dev'
import red from './colors/red'
import { conditions } from './conditions'
import { globalCss } from './global-css'
import { breakpoints } from './theme/breakpoints'
import { keyframes } from './theme/keyframes'
import { recipes, slotRecipes } from './theme/recipes'
import { semanticTokens } from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import { tokens } from './theme/tokens'
import { type Radii, getRadii } from './utils/get-radii'

export interface ColorPalette {
  name: string
  tokens: Tokens['colors']
  semanticTokens: SemanticTokens['colors']
}

export interface PresetOptions {
  accentColor: ColorPalette
  grayColor: ColorPalette
  radii: Radii
}

export const createPreset = (options: PresetOptions) => {
  const { accentColor, grayColor, radii } = options

  const standardizeGrayTokens = (tokens: SemanticTokens['colors']) =>
    JSON.parse(JSON.stringify(tokens).replace(new RegExp(grayColor.name, 'g'), 'gray'))

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
            gray: grayColor.tokens ?? {},
            [accentColor.name]: accentColor.tokens,
          },
        },
        semanticTokens: {
          ...semanticTokens,
          colors: {
            ...semanticTokens.colors,
            red: red.semanticTokens,
            gray: standardizeGrayTokens(grayColor.semanticTokens),
            [accentColor.name]: accentColor.semanticTokens,
          },
          radii: getRadii(radii),
        },
      },
    },
  })
}
