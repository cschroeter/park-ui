import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    lineHeight: 1.5,
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    WebkitTextSizeAdjust: '100%',
  },
  body: {
    background: 'bg.canvas',
    color: 'fg.default',
    _dark: {
      colorScheme: 'dark',
    },
  },
  '*, *::before, *::after': {
    borderColor: 'border.default',
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
  '*::placeholder': {
    opacity: 1,
    color: 'fg.subtle',
  },
})
