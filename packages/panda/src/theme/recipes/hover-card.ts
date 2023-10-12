import { hoverCardAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const hoverCard = defineSlotRecipe({
  className: 'hoverCard',
  slots: hoverCardAnatomy.keys(),
  jsx: ['HoverCard', /HoverCard\.+/],
  base: {
    content: {
      '--hover-card-background': 'colors.bg.default',
      background: 'var(--hover-card-background)',
      borderRadius: 'l3',
      borderWidth: '1px',
      boxShadow: 'lg',
      maxW: '80',
      p: '4',
      position: 'relative',
      _open: {
        animation: 'fadeIn 0.25s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
    },
    arrow: {
      '--arrow-size': '12px',
      '--arrow-background': 'var(--hover-card-background)',
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
    },
  },
})
