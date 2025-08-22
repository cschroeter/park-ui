import { defineSlotRecipe } from '@pandacss/dev'

export const collapsible = defineSlotRecipe({
  className: 'collapsible',
  slots: ['root', 'content'],
  base: {
    root: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
    },
    content: {
      overflow: 'hidden',
      width: 'full',
      _open: {
        animation: 'collapse-in',
      },
      _closed: {
        animation: 'collapse-out',
      },
    },
  },
})
