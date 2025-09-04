import { fieldAnatomy } from '@ark-ui/react/field'
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
      alignItems: 'center',
      color: 'gray.12',
      display: 'flex',
      fontWeight: 'medium',
      gap: '0.5',
      textAlign: 'start',
      textStyle: 'sm',
      userSelect: 'none',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    requiredIndicator: {
      color: 'colorPalette.solid',
    },
    helperText: {
      color: 'gray.11',
      textStyle: 'sm',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    errorText: {
      alignItems: 'center',
      color: 'fg.error',
      display: 'inline-flex',
      gap: '2',
      textStyle: 'sm',
      _disabled: {
        color: 'fg.disabled',
      },
    },
  },
})
