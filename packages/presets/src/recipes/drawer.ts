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
      alignItems: 'center',
      display: 'flex',
      left: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      position: 'fixed',
      zIndex: 'modal',
    },
    content: {
      background: 'bg.default',
      borderRightWidth: '1px',
      boxShadow: 'lg',
      height: 'full',
      minW: 'xs',
      overflowY: 'auto',
      position: 'relative',
      px: '4',
      py: '5',
      _open: {
        animation: 'drawer-in',
      },
      _closed: {
        animation: 'drawer-out',
      },
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
