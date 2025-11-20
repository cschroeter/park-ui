import { timerAnatomy } from '@ark-ui/react/timer'
import { defineSlotRecipe } from '@pandacss/dev'

export const timer = defineSlotRecipe({
  className: 'timer',
  slots: timerAnatomy.keys(),
  base: {},
})
