import { pinInputAnatomy } from '@ark-ui/react'
import { defineSlotRecipe } from '@pandacss/dev'

export const pinInput = defineSlotRecipe({
  className: 'pinInput',
  description: 'An pin input style',
  slots: pinInputAnatomy.keys(),
  base: {
    control: {
      display: 'flex',
      gap: '2',
    },
  },
})
