import { accordionAnatomy } from '@ark-ui/react/accordion'
import { defineSlotRecipe } from '@pandacss/dev'

export const accordion = defineSlotRecipe({
  className: 'accordion',
  description: 'An accordion style',
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      divideY: '1px',
      width: 'full',
    },
    trigger: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      fontWeight: 'medium',
      justifyContent: 'space-between',
      width: 'full',
    },
    content: {
      color: 'fg.muted',
      display: 'grid',
      gridTemplateRows: '0fr',
      transitionProperty: 'grid-template-rows, padding-bottom',
      transitionDuration: 'normal',
      transitionTimingFunction: 'default',
      _open: {
        gridTemplateRows: '1fr',
      },
      '& > div': {
        overflow: 'hidden',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
  variants: {
    size: {
      lg: {
        trigger: {
          py: '8',
        },
        content: {
          pb: '12',
          pr: '8',
          _closed: {
            pb: '0',
          },
        },
      },
      md: {
        trigger: {
          py: '4',
        },
        content: {
          pb: '6',
          pr: '8',
          _closed: {
            pb: '0',
          },
        },
      },
    },
    variant: {
      primary: {
        trigger: {
          bg: 'teal.300',
        },
      },
      secondary: {
        trigger: {
          bg: 'orange.200',
        },
      },
    },
  },
})
