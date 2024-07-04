import { fieldAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const field = defineSlotRecipe({
  className: 'field',
  slots: fieldAnatomy.keys(),
  base: {},
})
