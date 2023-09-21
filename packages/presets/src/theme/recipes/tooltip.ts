import { tooltipAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const tooltip = defineSlotRecipe({
  className: 'tooltip',
  slots: tooltipAnatomy.keys(),
  base: {
    content: {
      background: 'fg.default',
      borderRadius: 'l2',
      boxShadow: 'lg',
      color: 'bg.default',
      fontWeight: 'semibold',
      px: '3',
      py: '2',
      textStyle: 'xs',
    },
  },
})
