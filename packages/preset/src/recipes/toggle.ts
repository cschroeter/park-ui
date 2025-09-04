import { toggleAnatomy } from '@ark-ui/react/toggle'
import { defineSlotRecipe } from '@pandacss/dev'

export const toggle = defineSlotRecipe({
  className: 'toggle',
  slots: toggleAnatomy.keys(),
  base: {},
})
