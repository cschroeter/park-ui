import { dialogAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(dialogAnatomy.build())

export const dialog = defineRecipe({
  className: 'dialog',
  description: 'A dialog style',
  base: parts({
    backdrop: {
      background: {
        // TODO: replace when supported: bg.canvas/80
        base: 'rgba(250, 250, 250, 0.8)',
        _dark: 'rgba(10, 10, 10, 0.8)',
      },
      backdropFilter: 'blur(4px)',
      inset: '0',
      position: 'fixed',
      zIndex: 'overlay',
      _open: {
        animation: 'backdropIn 150ms cubic-bezier(0, 0, 0, 1)',
      },
      _closed: {
        animation: 'backdropOut 150ms cubic-bezier(0.3, 0, 1, 1)',
      },
    },
    container: {
      alignItems: 'center',
      display: 'flex',
      inset: '0',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: 'modal',
    },
    content: {
      background: 'bg.default',
      borderRadius: 'lg',
      borderWidth: '1px',
      boxShadow: 'lg',
      minW: 'sm',
      position: 'relative',
      _open: {
        animation: 'slideIn 500ms cubic-bezier(0.05, 0.7, 0.1, 1.0)',
      },
      _closed: {
        animation: 'slideOut 200ms cubic-bezier(0.3, 0.0, 0.8, 0.15)',
      },
      // _open: {
      //   animation: 'slideIn 0.25s ease-out',
      // },
      // _closed: {
      //   animation: 'slideOut 0.2s ease-in',
      // },
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
