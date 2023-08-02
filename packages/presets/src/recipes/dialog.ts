import { dialogAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(dialogAnatomy.build())

export const dialog = defineRecipe({
  className: 'dialog',
  description: 'A dialog style',
  base: parts({
    backdrop: {
      background: 'neutral.950',
      opacity: '0.7',
      inset: '0',
      position: 'fixed',
      zIndex: 'overlay',
      _open: {
        animation: 'backdropIn 0.25s ease-out',
      },
      _closed: {
        animation: 'backdropOut 0.2s ease-in',
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
      minW: 'sm',
      position: 'relative',
      _open: {
        animation: 'slideIn 0.25s ease-out',
      },
      _closed: {
        animation: 'slideOut 0.2s ease-in',
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
