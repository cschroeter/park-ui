import { editableAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const editable = defineSlotRecipe({
  className: 'editable',
  slots: editableAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: '100%',
    },
    control: {
      display: 'flex',
      gap: '2',
    },
    input: {
      appearance: 'none',
      background: 'none',
      borderColor: 'border.default',
      borderRadius: 'l2',
      borderWidth: '1px',
      colorPalette: 'accent',
      color: 'fg.default',
      outline: 0,
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'box-shadow, border-color',
      transitionTimingFunction: 'default',
      width: 'full',
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _focus: {
        borderColor: 'colorPalette.default',
        boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
      },
    },
  },
})
