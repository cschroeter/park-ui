import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(['field'])

export const Input = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: {
      appearance: 'none',
      background: 'none',
      borderColor: 'border.default',
      borderRadius: 'l2',
      borderWidth: '1px',
      colorPalette: 'accent',
      color: 'fg.default',
      outline: 0,
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'box-shadow, border-color',
      transitionTimingFunction: 'default',
      width: 'full',
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _focus: {
        borderColor: 'colorPalette.default',
        boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
      },
    },
  }),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: {
    '2xs': { field: { px: '1.5', h: '7', minW: '7', fontSize: 'xs' } },
    xs: { field: { px: '2', h: '8', minW: '8', fontSize: 'xs' } },
    sm: { field: { px: '2.5', h: '9', minW: '9', fontSize: 'sm' } },
    md: { field: { px: '3', h: '10', minW: '10', fontSize: 'md' } },
    lg: { field: { px: '3.5', h: '11', minW: '11', fontSize: 'md' } },
    xl: { field: { px: '4', h: '12', minW: '12', fontSize: 'lg' } },
    '2xl': { field: { px: '2', h: '16', minW: '16', textStyle: '3xl' } },
  },
  variants: {},
})
