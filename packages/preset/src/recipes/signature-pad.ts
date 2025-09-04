import { signaturePadAnatomy } from '@ark-ui/react/signature-pad'
import { defineSlotRecipe } from '@pandacss/dev'

export const signaturePad = defineSlotRecipe({
  className: 'signaturePad',
  slots: signaturePadAnatomy.keys(),
  base: {},
})
