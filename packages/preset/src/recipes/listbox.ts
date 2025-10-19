import { listboxAnatomy } from '@ark-ui/react/listbox'
import { defineSlotRecipe } from '@pandacss/dev'

export const listbox = defineSlotRecipe({
  className: 'listbox',
  slots: listboxAnatomy.keys(),
  base: {},
})
