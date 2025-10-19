import { collapsibleAnatomy } from '@ark-ui/react/collapsible'
import { defineSlotRecipe } from '@pandacss/dev'

export const collapsible = defineSlotRecipe({
  className: 'collapsible',
  slots: collapsibleAnatomy.keys(),
  base: {
    content: {
      overflow: 'hidden',
      _open: {
        animationName: 'expand-height, fade-in',
        animationDuration: 'slow',
      },
      _closed: {
        animationName: 'collapse-height, fade-out',
        animationDuration: 'normal',
      },
    },
  },
})
