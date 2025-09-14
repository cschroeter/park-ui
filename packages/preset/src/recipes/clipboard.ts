import { clipboardAnatomy } from '@ark-ui/react/clipboard'
import { defineSlotRecipe } from '@pandacss/dev'

export const clipboard = defineSlotRecipe({
  className: 'clipboard',
  slots: clipboardAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1.5',
    },
    label: {
      fontWeight: 'medium',
      textStyle: 'sm',
      color: 'fg.default',
      gap: '0.5',
    },
  },
})
