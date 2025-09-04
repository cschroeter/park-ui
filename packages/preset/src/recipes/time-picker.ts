import { timePickerAnatomy } from '@ark-ui/react/time-picker'
import { defineSlotRecipe } from '@pandacss/dev'

export const timePicker = defineSlotRecipe({
  className: 'time-picker',
  slots: timePickerAnatomy.keys(),
  base: {},
})
