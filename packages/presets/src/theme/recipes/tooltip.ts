import { tooltipAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(tooltipAnatomy.build())

export const tooltip = defineRecipe({
  className: 'tooltip',
  description: 'A tooltip style',
  base: parts({
    content: {
      background: 'fg.default',
      borderRadius: 'sm',
      boxShadow: 'lg',
      color: 'bg.default',
      fontWeight: 'semibold',
      px: '3',
      py: '2',
      textStyle: 'xs',
    },
  }),
})
