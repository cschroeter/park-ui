import { angleSliderAnatomy } from '@ark-ui/react/angle-slider'
import { defineSlotRecipe } from '@pandacss/dev'

export const angleSlider = defineSlotRecipe({
  className: 'angleSlider',
  slots: angleSliderAnatomy.keys(),
  base: {},
})
