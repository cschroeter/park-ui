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
  },
  variants: {
    size: {
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
  },
})
