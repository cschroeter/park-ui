import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

export const FormLabel = defineStyleConfig({
  baseStyle: defineStyle((props) => ({ color: 'fg.default', fontWeight: 'medium' })),
  defaultProps: {
    size: 'md',
    colorScheme: 'accent',
  },
  sizes: {
    sm: { textStyle: 'sm' },
    md: { textStyle: 'sm' },
    lg: { textStyle: 'sm' },
    xl: { textStyle: 'md' },
  },
  variants: {},
})
