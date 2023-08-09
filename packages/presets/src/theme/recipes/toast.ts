import { toastAnatomy } from '@ark-ui/react'
import { defineSlotRecipe } from '@pandacss/dev'

export const toast = defineSlotRecipe({
  className: 'toast',
  description: 'A toast style',
  slots: toastAnatomy.keys(),
  base: {
    root: {
      background: 'bg.default',
      borderRadius: 'lg',
      borderWidth: '1px',
      boxShadow: 'lg',
      minWidth: 'xs',
      p: '4',
      _open: {
        animation: 'slideInFromBottom 0.2s ease-out',
      },
      _closed: {
        animation: 'slideOutFromBottom 0.2s ease-out',
      },
    },
    group: {
      p: '4',
    },
    title: {
      fontWeight: 'semibold',
      textStyle: 'sm',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
  },
})
