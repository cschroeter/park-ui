import { definePreset } from '@pandacss/dev'
import { conditions } from './conditions'
import { globalCss } from './global-css'
import { keyframes } from './keyframes'
import { recipes } from './recipes'
import { semanticTokens } from './semantic-tokens'
import { textStyles } from './text-styles'
import { tokens } from './tokens'

export default definePreset({
  theme: {
    extend: {
      recipes,
      keyframes,
      semanticTokens,
      textStyles,
      tokens,
    },
  },
  conditions,
  globalCss,
})
