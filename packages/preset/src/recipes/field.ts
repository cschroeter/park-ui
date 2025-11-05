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
      color: 'fg.default',
      display: 'flex',
      gap: '0.5',
      textAlign: 'start',
      userSelect: 'none',
      textStyle: 'label',
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    requiredIndicator: {
      color: 'colorPalette.solid',
    },
    helperText: {
      color: 'fg.muted',
      textStyle: 'sm',
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    errorText: {
      color: 'error',
      textStyle: 'sm',
    },
  },
})
