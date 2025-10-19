import { toggleGroupAnatomy } from '@ark-ui/react/toggle-group'
import { defineSlotRecipe } from '@pandacss/dev'

export const toggleGroup = defineSlotRecipe({
  className: 'toggle-group',
  slots: toggleGroupAnatomy.keys(),
  base: {
    root: {},
  },
  variants: {
    variant: {
      outline: {
        root: {
          borderRadius: 'l3',
          borderWidth: '1px',
          gap: '1',
          p: '1',
        },
      },
    },
  },
})
