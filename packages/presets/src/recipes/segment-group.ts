import { segmentGroupAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(segmentGroupAnatomy.build())

export const segmentGroup = defineRecipe({
  className: 'segmentGroup',
  description: 'A segment group style',
  base: parts({
    root: {
      display: 'flex',
      flexDirection: {
        _horizontal: 'row',
        _vertical: 'column',
      },
      gap: {
        _horizontal: '4',
        _vertical: '1',
      },
      borderBottomWidth: {
        _horizontal: '1px',
      },
      borderLeftWidth: {
        _vertical: '1px',
      },
    },
    indicator: {
      borderBottomWidth: {
        _horizontal: '2px',
      },
      borderLeftWidth: {
        _vertical: '2px',
      },
      borderColor: 'fg.default',
      transform: {
        _horizontal: 'translateY(1px)',
        _vertical: 'translateX(-1px)',
      },
    },
    radio: {
      color: 'fg.subtle',
      cursor: 'pointer',
      fontWeight: 'medium',
      transitionDuration: 'fast',
      transitionProperty: 'color',
      transitionTimingFunction: 'ease-in-out',
      _hover: {
        color: 'fg.muted',
      },
      _checked: {
        fontWeight: 'semibold',
        color: 'fg.emphasized',
        _hover: {
          color: 'fg.emphasized',
        },
      },
      px: {
        _horizontal: '1',
        _vertical: '3',
      },
      pb: {
        _horizontal: '3',
      },
      py: {
        _vertical: '1.5',
      },
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: parts({
        radio: {
          textStyle: 'sm',
        },
      }),
      md: parts({
        radio: {
          textStyle: 'md',
        },
      }),
    },
  },
})
