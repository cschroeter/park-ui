import { pinInputAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const pinInput = defineSlotRecipe({
  className: 'pinInput',
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
      color: 'fg.default',
      fontWeight: 'medium',
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
