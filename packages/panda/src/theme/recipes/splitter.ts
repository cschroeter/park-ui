import { splitterAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const splitter = defineSlotRecipe({
  className: 'splitter',
  slots: splitterAnatomy.keys(),
  jsx: ['Splitter', /Splitter\.+/],
  base: {
    root: {
      display: 'flex',
      gap: '2',
    },
    panel: {
      borderWidth: '1px',
      background: 'bg.subtle',
      borderRadius: 'l2',
      color: 'fg.muted',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    resizeTrigger: {
      borderRadius: 'full',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      outline: '0',
      background: 'bg.muted',
      _hover: {
        background: 'bg.emphasized',
      },
      _active: {
        background: 'bg.emphasized',
      },
      _horizontal: {
        minWidth: '6px',
        margin: 'min(1rem, 20%) 0',
      },
      _vertical: {
        minHeight: '6px',
        margin: '0 min(1rem, 20%)',
      },
    },
  },
})
