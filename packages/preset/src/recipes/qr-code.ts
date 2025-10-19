import { qrCodeAnatomy } from '@ark-ui/react/qr-code'
import { defineSlotRecipe } from '@pandacss/dev'

export const qrCode = defineSlotRecipe({
  className: 'qr-code',
  slots: qrCodeAnatomy.keys(),
  base: {},
})
