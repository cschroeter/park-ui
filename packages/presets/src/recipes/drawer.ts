import { dialogAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(dialogAnatomy.build())

export const drawer = defineRecipe({
  className: 'drawer',
  description: 'A drawer style',
  base: parts({
    backdrop: {
      backdropFilter: 'blur(4px)',
      background: {
        // TODO: replace when supported in Panda: bg.canvas/80
        base: 'rgba(250, 250, 250, 0.8)',
        _dark: 'rgba(10, 10, 10, 0.8)',
      },
      inset: '0',
      position: 'fixed',
      zIndex: 'overlay',
      _open: {
        animation: 'backdrop-in',
      },
      _closed: {
        animation: 'backdrop-out',
      },
    },
    container: {
      alignItems: 'flex-start',
      display: 'flex',
      inset: '0',
      justifyContent: 'flex-start',
      position: 'fixed',
      zIndex: 'modal',
    },
    content: {
      background: 'bg.default',
      boxShadow: 'lg',
      position: 'relative',
      height: 'full',
      minW: 'xs',
      py: '5',
      px: '4',
      overflowY: 'auto',
      borderRightWidth: '1px',
    },
    title: {
      fontWeight: 'semibold',
      textStyle: 'lg',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
  }),
})
