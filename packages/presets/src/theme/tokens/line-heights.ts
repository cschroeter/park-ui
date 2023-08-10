import { defineTokens } from '@pandacss/dev'

export const lineHeights = defineTokens.lineHeights({
  none: { value: '1' },
  tight: { value: '1.25' },
  normal: { value: '1.5' },
  relaxed: { value: '1.75' },
  loose: { value: '2' },
})
