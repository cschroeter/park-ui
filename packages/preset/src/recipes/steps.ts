import { stepsAnatomy } from '@ark-ui/react/steps'
import { defineSlotRecipe } from '@pandacss/dev'

export const steps = defineSlotRecipe({
  className: 'steps',
  slots: stepsAnatomy.keys(),
  base: {},
})
