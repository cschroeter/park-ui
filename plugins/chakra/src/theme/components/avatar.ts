import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'image',
  'fallback',
])

export const Avatar = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: { borderRadius: 'full', borderWidth: '1px', flexShrink: 0 },
    fallback: {
      alignItems: 'center',
      background: 'bg.subtle',
      borderWidth: '1px',
      display: 'flex',
      fontWeight: 'semibold',
      height: 'inherit',
      justifyContent: 'center',
    },
    image: { objectFit: 'cover' },
  }),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: {
    xs: { root: { height: '8', width: '8' }, fallback: { textStyle: 'xs' } },
    sm: { root: { height: '9', width: '9' }, fallback: { textStyle: 'sm' } },
    md: { root: { height: '10', width: '10' }, fallback: { textStyle: 'md' } },
    lg: { root: { height: '11', width: '11' }, fallback: { textStyle: 'lg' } },
    xl: { root: { height: '12', width: '12' }, fallback: { textStyle: 'xl' } },
    '2xl': { root: { height: '16', width: '16' }, fallback: { textStyle: '2xl' } },
  },
  variants: {},
})
