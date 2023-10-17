import { editableAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const editable = defineSlotRecipe({
  className: 'editable',
  slots: editableAnatomy.keys(),
  jsx: ['Editable', /Editable\.+/],
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
  },
})
