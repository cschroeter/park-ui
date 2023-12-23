import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

export const Heading = defineStyleConfig({
  baseStyle: defineStyle((props) => ({
    color: 'fg.default',
    fontWeight: 'semibold',
    textStyle: 'xl',
  })),
  defaultProps: {},
  sizes: {},
  variants: {},
})
