import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  body: {
    background: 'bg.canvas',
    color: 'fg.default',
    _dark: {
      colorScheme: 'dark',
    },
  },
  '*, *::before, *::after': {
    borderColor: 'border.subtle',
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
  '*::placeholder': {
    opacity: 1,
    color: 'fg.subtle',
  },
  '*::selection': {
    bg: 'colorPalette.a3',
  },
})
