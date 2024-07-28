import { fieldAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const field = defineSlotRecipe({
  className: 'field',
  slots: fieldAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
    },
    label: {
      color: 'fg.default',
      fontWeight: 'medium',
      textStyle: 'sm',
    },
    helperText: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
    errorText: {
      color: 'fg.error',
      fontWeight: 'medium',
      textStyle: 'sm',
    },
  },
})
