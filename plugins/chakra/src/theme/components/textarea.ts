import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

export const Textarea = defineStyleConfig({
  baseStyle: defineStyle((props) => ({
    appearance: 'none',
    background: 'none',
    borderColor: 'border.default',
    borderRadius: 'l2',
    borderWidth: '1px',
    colorPalette: 'accent',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'border-color, box-shadow',
    width: 'full',
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    _focus: {
      borderColor: `${props.colorScheme}.default`,
      boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
    },
  })),
  defaultProps: {
    size: 'md',
    colorScheme: 'accent',
  },
  sizes: {
    sm: { p: '2.5', fontSize: 'sm' },
    md: { p: '3', fontSize: 'md' },
    lg: { p: '3.5', fontSize: 'md' },
    xl: { p: '4', fontSize: 'md' },
  },
  variants: {},
})
