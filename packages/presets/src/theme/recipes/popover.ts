import { popoverAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(popoverAnatomy.build())

export const popover = defineRecipe({
  className: 'popover',
  description: 'A popover style',
  base: parts({
    positioner: {
      position: 'relative',
      zIndex: 'popover',
    },
    content: {
      background: 'bg.default',
      borderRadius: 'lg',
      borderWidth: '1px',
      boxShadow: 'lg',
      maxWidth: 'sm',
      zIndex: '1',
      p: '4',
      _open: {
        animation: 'fadeIn 0.25s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
    },
    title: {
      fontWeight: 'medium',
      textStyle: 'sm',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
    closeTrigger: {
      color: 'fg.muted',
    },
    arrow: {
      '--arrow-size': 'var(--sizes-3)',
      '--arrow-background': 'var(--colors-bg-default)',
    },
    arrowTip: {
      borderTopWidth: '1px',
      borderLeftWidth: '1px',
    },
  }),
})
