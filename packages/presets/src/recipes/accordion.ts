import { accordionAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(accordionAnatomy.build())

export const accordion = defineRecipe({
  className: 'accordion',
  description: 'An accordion style',
  base: parts({
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
      transitionTimingFunction: 'ease-in-out',
      _open: {
        gridTemplateRows: '1fr',
      },
      '& > div': {
        overflow: 'hidden',
      },
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      md: parts({
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
      }),
    },
  },
})
