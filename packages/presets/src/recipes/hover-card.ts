import { hoverCardAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(hoverCardAnatomy.build())

export const hoverCard = defineRecipe({
  className: 'hoverCard',
  description: 'A hover card style',
  base: parts({
    positioner: {},
    content: {
      '--hover-card-background': 'colors.bg.default',
      background: 'var(--hover-card-background)',
      borderRadius: 'lg',
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
  }),
})
