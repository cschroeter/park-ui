import { defineSemanticTokens } from '@pandacss/dev'

export const shadows = defineSemanticTokens({
  accent: {
    value: '0 0 0 1px {colors.border.accent}',
  },
  outline: {
    value: '0 0 0 1px {colors.border.outline}',
  },
  xs: {
    value: {
      base: '0px 1px 2px rgba(23, 23, 23,  0.1)',
      _dark: '0px 1px 2px rgba(0, 0, 0, 1.0)',
    },
  },
  sm: {
    value: {
      base: '0px 2px 4px rgba(23, 23, 23,  0.1)',
      _dark: '0px 2px 4px rgba(0, 0, 0, 1.0)',
    },
  },
  md: {
    value: {
      base: '0px 4px 8px rgba(23, 23, 23,  0.1)',
      _dark: '0px 4px 8px rgba(0, 0, 0, 1.0)',
    },
  },
  lg: {
    value: {
      base: '0px 8px 16px rgba(23, 23, 23,  0.1)',
      _dark: '0px 8px 16px rgba(0, 0, 0, 1.0)',
    },
  },
  xl: {
    value: {
      base: '0px 16px 24px rgba(23, 23, 23,  0.1)',
      _dark: '0px 16px 24px rgba(0, 0, 0, 1.0)',
    },
  },
})
