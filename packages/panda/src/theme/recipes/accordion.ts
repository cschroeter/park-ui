import { accordionAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const accordion = defineSlotRecipe({
  className: 'accordion',
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      divideY: '1px',
      width: 'full',
    },
    itemTrigger: {
      alignItems: 'center',
      color: 'fg.default',
      cursor: 'pointer',
      display: 'flex',
      fontWeight: 'semibold',
      justifyContent: 'space-between',
      textStyle: 'lg',
      width: 'full',
    },
    itemContent: {
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
        itemTrigger: {
          py: '4',
        },
        itemContent: {
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
