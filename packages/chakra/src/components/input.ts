import { inputAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

export const Input = defineMultiStyleConfig({
  baseStyle: {
    field: {
      appearance: 'none',
      background: 'none',
      borderColor: 'border.default',
      borderRadius: 'l2',
      borderWidth: '1px',
      outline: 0,
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'box-shadow, border-color',
      transitionTimingFunction: 'default',
      width: 'full',
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _focus: {
        borderColor: 'border.accent',
        boxShadow: 'accent',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
  sizes: {
    '2xs': definePartsStyle({
      field: { px: '1.5', h: '7', minW: '7', fontSize: 'xs' },
    }),
    xs: definePartsStyle({
      field: { px: '2', h: '7', minW: '7', fontSize: 'xs' },
    }),
    sm: definePartsStyle({
      field: { px: '2.5', h: '8', minW: '8', fontSize: 'sm' },
    }),
    md: definePartsStyle({
      field: { px: '3', h: '10', minW: '10', fontSize: 'md' },
    }),
    lg: definePartsStyle({
      field: { px: '3.5', h: '11', minW: '11', fontSize: 'md' },
    }),
    xl: definePartsStyle({
      field: { px: '4', h: '12', minW: '12', fontSize: 'lg' },
    }),
    '2xl': definePartsStyle({
      field: { px: '2', h: '16', minW: '16', textStyle: '3xl' },
    }),
  },
})
