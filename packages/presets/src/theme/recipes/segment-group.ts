import { segmentGroupAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const segmentGroup = defineSlotRecipe({
  className: 'segmentGroup',
  slots: segmentGroupAnatomy.keys(),
  base: {
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
      borderColor: 'accent.default',
      transform: {
        _horizontal: 'translateY(1px)',
        _vertical: 'translateX(-1px)',
      },
    },
    radio: {
      color: 'fg.subtle',
      cursor: 'pointer',
      fontWeight: 'medium',
      transitionDuration: 'normal',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',
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
      _disabled: {
        color: 'fg.disabled',
        cursor: 'not-allowed',
        _hover: {
          color: 'fg.disabled',
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
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        radio: {
          textStyle: 'sm',
        },
      },
      md: {
        radio: {
          textStyle: 'md',
        },
      },
    },
  },
})
