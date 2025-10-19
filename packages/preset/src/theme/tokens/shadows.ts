import { defineSemanticTokens } from '@pandacss/dev'

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      _light: '0px 1px 2px {colors.gray.a6}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 1px 1px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  sm: {
    value: {
      _light: '0px 2px 4px {colors.gray.a4}, 0px 0px 1px {colors.gray.a4}',
      _dark: '0px 2px 4px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a4}',
    },
  },
  md: {
    value: {
      _light: '0px 4px 8px {colors.gray.a4}, 0px 0px 1px {colors.gray.a4}',
      _dark: '0px 4px 8px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a4}',
    },
  },
  lg: {
    value: {
      _light: '0px 8px 16px {colors.gray.a4}, 0px 0px 1px {colors.gray.a4}',
      _dark: '0px 8px 16px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a4}',
    },
  },
  xl: {
    value: {
      _light: '0px 16px 24px {colors.gray.a4}, 0px 0px 1px {colors.gray.a4}',
      _dark: '0px 16px 24px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a4}',
    },
  },
  '2xl': {
    value: {
      _light: '0px 24px 40px {colors.gray.a4}, 0px 0px 1px {colors.gray.a4}',
      _dark: '0px 24px 40px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a4}',
    },
  },
})
