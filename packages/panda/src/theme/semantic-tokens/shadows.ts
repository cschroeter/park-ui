import { defineSemanticTokens } from '@pandacss/dev'

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      base: '0px 1px 2px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 1px 2px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  sm: {
    value: {
      base: '0px 2px 4px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 2px 4px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  md: {
    value: {
      base: '0px 4px 8px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 4px 8px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  lg: {
    value: {
      base: '0px 8px 16px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 8px 16px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  xl: {
    value: {
      base: '0px 16px 24px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 16px 24px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
  '2xl': {
    value: {
      base: '0px 24px 40px {colors.gray.a3}, 0px 0px 1px {colors.gray.a7}',
      _dark: '0px 24px 40px {colors.black.a10}, 0px 0px 1px inset {colors.gray.a7}',
    },
  },
})
