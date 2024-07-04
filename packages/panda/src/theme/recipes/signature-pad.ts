import { signaturePadAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const signaturePad = defineSlotRecipe({
  className: 'signaturePad',
  slots: signaturePadAnatomy.keys(),
  base: {},
})
