import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  extend: {
    '*, *::before, *::after': {
      borderColor: 'gray.a4',
    },
    body: {
      background: 'gray.1',
      color: 'text',
    },
    '*::selection': {
      bg: 'colorPalette.a3',
    },
    '*::placeholder': {
      opacity: 1,
      color: 'text.subtle',
    },
  },
})
