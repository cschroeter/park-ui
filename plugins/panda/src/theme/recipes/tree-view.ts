import { treeViewAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const treeView = defineSlotRecipe({
  className: 'treeView',
  slots: treeViewAnatomy.keys(),
  base: {},
})
