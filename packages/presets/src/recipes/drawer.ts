import { dialogAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(dialogAnatomy.build())

export const drawer = defineRecipe({
  className: 'drawer',
  description: 'A drawer style',
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
