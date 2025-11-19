import { defineRecipe } from '@pandacss/dev'

export const inputElement = defineRecipe({
  className: 'input-element',
  base: {
    alignItems: 'center',
    color: 'fg.muted',
    display: 'flex',
    height: 'full',
    justifyContent: 'center',
    position: 'absolute',
    px: '3',
    zIndex: '2',
  },
  variants: {
    placement: {
      start: {
        insetInlineStart: '0',
      },
      end: {
        insetInlineEnd: '0',
      },
    },
  },
})
