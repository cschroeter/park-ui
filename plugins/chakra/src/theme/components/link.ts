import { defineStyleConfig } from '@chakra-ui/react'

export const Link = defineStyleConfig({
  baseStyle: {
    alignItems: 'center',
    color: 'fg.default',
    colorPalette: 'accent',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'medium',
    gap: '2',
    textDecoration: 'underline 0.1em transparent',
    textUnderlineOffset: '0.125em',
    transitionDuration: 'normal',
    transitionProperty: 'text-decoration-color',
    transitionTimingFunction: 'default',
    _hover: { textDecorationColor: 'colorPalette.default' },
    '&amp; svg': { width: '1em', height: '1em' },
  },
  defaultProps: {},
  sizes: {},
  variants: {},
})
