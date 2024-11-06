import { definePreset } from '@pandacss/dev'
import { conditions } from './conditions'
import { globalCss } from './global-css'
import { breakpoints } from './theme/breakpoints'
import { keyframes } from './theme/keyframes'
import { semanticTokens } from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import { tokens } from './theme/tokens'

export default definePreset({
  name: '@park-ui/panda-preset',
  conditions,
  globalCss,
  theme: {
    extend: {
      breakpoints,
      keyframes,
      semanticTokens,
      textStyles,
      tokens,
    },
  },
})
