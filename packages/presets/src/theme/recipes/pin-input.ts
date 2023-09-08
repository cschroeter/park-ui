import { pinInputAnatomy } from '@ark-ui/react'
import { defineSlotRecipe } from '@pandacss/dev'

export const pinInput = defineSlotRecipe({
  className: 'pinInput',
  description: 'An pin input style',
  slots: pinInputAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
    },
    control: {
      display: 'flex',
      gap: '2',
    },
    label: {
      color: 'fg.emphasized',
      fontWeight: 'medium',
      textStyle: 'sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        label: {
          textStyle: 'sm',
        },
      },
      md: {
        label: {
          textStyle: 'sm',
        },
      },
      lg: {
        label: {
          textStyle: 'sm',
        },
      },
      xl: {
        label: {
          textStyle: 'md',
        },
      },
    },
  },
})
