import { floatingPanelAnatomy } from '@ark-ui/react/floating-panel'
import { defineSlotRecipe } from '@pandacss/dev'

export const floatingPanel = defineSlotRecipe({
  className: 'floating-panel',
  slots: floatingPanelAnatomy.keys(),
  base: {},
})
