import { tourAnatomy } from '@ark-ui/react/tour'
import { defineSlotRecipe } from '@pandacss/dev'

export const tour = defineSlotRecipe({
  className: 'tour',
  slots: tourAnatomy.keys(),
  base: {},
})
