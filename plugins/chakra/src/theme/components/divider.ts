import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

export const Divider = defineStyleConfig({
  baseStyle: defineStyle({
    borderColor: 'inherit',
  }),
  defaultProps: {
    variant: 'solid',
  },
  variants: {
    solid: defineStyle({
      borderStyle: 'solid',
    }),
    dashed: defineStyle({
      borderStyle: 'dashed',
    }),
  },
})
