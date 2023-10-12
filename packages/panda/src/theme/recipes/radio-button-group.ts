import { radioGroupAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const radioButtonGroup = defineSlotRecipe({
  className: 'radioButtonGroup',
  slots: radioGroupAnatomy.keys(),
  jsx: ['RadioButtonGroup', /RadioButtonGroup\.+/],
  base: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    radio: {
      alignItems: 'center',
      appearance: 'none',
      borderColor: 'border.emphasized',
      borderRadius: 'l2',
      borderWidth: '1px',
      color: 'fg.emphasized',
      cursor: 'pointer',
      display: 'inline-flex',
      fontWeight: 'semibold',
      justifyContent: 'center',
      outline: 'none',
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'background, border-color, color, box-shadow',
      transitionTimingFunction: 'default',
      userSelect: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      _hover: {
        color: 'fg.default',
        background: 'bg.subtle',
      },
      _checked: {
        cursor: 'default',
      },
      _disabled: {
        borderColor: 'border.disabled',
        color: 'fg.disabled',
        cursor: 'not-allowed',
        _hover: {
          background: 'initial',
          borderColor: 'border.disabled',
          color: 'fg.disabled',
        },
      },
    },
    radioLabel: {
      display: 'inline-flex',
      alignItems: 'center',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
  variants: {
    variant: {
      solid: {
        radio: {
          _checked: {
            background: 'accent.default',
            borderColor: 'border.accent',
            color: 'accent.fg',
            _hover: {
              color: 'accent.fg',
              background: 'accent.default',
            },
          },
        },
      },
      outline: {
        radio: {
          _checked: {
            borderColor: 'border.accent',
            boxShadow: 'accent',
            _hover: {
              background: 'initial',
            },
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          gap: '2',
        },
        radio: {
          h: '9',
          minW: '9',
          textStyle: 'sm',
          px: '3.5',
          '& svg': {
            width: '4.5',
            height: '4.5',
          },
        },
        radioLabel: {
          gap: '2',
        },
      },
      md: {
        root: {
          gap: '3',
        },
        radio: {
          h: '10',
          minW: '10',
          textStyle: 'sm',
          px: '4',
          '& svg': {
            width: '5',
            height: '5',
          },
        },
        radioLabel: {
          gap: '2',
        },
      },
      lg: {
        root: {
          gap: '3',
        },
        radio: {
          h: '11',
          minW: '11',
          textStyle: 'md',
          px: '4.5',
          '& svg': {
            width: '5',
            height: '5',
          },
        },
        radioLabel: {
          gap: '2',
        },
      },
      xl: {
        root: {
          gap: '3',
        },
        radio: {
          h: '12',
          minW: '12',
          textStyle: 'md',
          px: '5',
          '& svg': {
            width: '5',
            height: '5',
          },
        },
        radioLabel: {
          gap: '2.5',
        },
      },
    },
  },
})
