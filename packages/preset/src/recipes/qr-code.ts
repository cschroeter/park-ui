import { qrCodeAnatomy } from '@ark-ui/react/qr-code'
import { defineSlotRecipe } from '@pandacss/dev'

export const qrCode = defineSlotRecipe({
  className: 'qrCode',
  slots: qrCodeAnatomy.keys(),
  base: {},
})
