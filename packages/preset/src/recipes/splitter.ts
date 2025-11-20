import { splitterAnatomy } from '@ark-ui/react/splitter'
import { defineSlotRecipe } from '@pandacss/dev'

export const splitter = defineSlotRecipe({
  className: 'splitter',
  slots: splitterAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      gap: '2',
    },
    panel: {
      borderRadius: 'l3',
      display: 'flex',
      background: 'gray.surface.bg',
      borderWidth: '1px',
      p: '4',
    },
    resizeTrigger: {
      borderRadius: 'l3',
      transition: 'common',
      outline: '0',
      background: 'gray.subtle.bg',
      _horizontal: {
        minWidth: '1.5',
      },
      _vertical: {
        minHeight: '1.5',
      },
    },
  },
})
