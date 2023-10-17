import { radioGroupAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const radioGroup = defineSlotRecipe({
  className: 'radioGroup',
  slots: radioGroupAnatomy.keys(),
  jsx: ['RadioGroup', /RadioGroup\.+/],
  base: {
    root: {
      display: 'flex',
      flexDirection: {
        _vertical: 'column',
        _horizontal: 'row',
      },
    },
    radioControl: {
      background: 'transparent',
      borderColor: 'border.emphasized',
      borderRadius: 'full',
      borderWidth: '1px',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      _hover: {
        background: 'bg.subtle',
      },
      _checked: {
        background: 'accent.default',
        borderColor: 'border.accent',
        outlineColor: 'bg.default',
        outlineStyle: 'solid',
        _hover: {
          background: 'accent.default',
        },
      },
      _disabled: {
        borderColor: 'border.disabled',
        color: 'fg.disabled',
        _hover: {
          bg: 'initial',
          color: 'fg.disabled',
        },
      },
    },
    radio: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      _disabled: {
        cursor: 'not-allowed',
      },
    },
    radioLabel: {
      color: 'fg.emphasized',
      fontWeight: 'medium',
      _disabled: {
        color: 'fg.disabled',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: {
            _vertical: '3',
            _horizontal: '4',
          },
        },
        radio: {
          gap: '2',
        },
        radioControl: {
          width: '4',
          height: '4',
          _checked: {
            outlineWidth: '3px',
            outlineOffset: '-4px',
          },
        },
        radioLabel: {
          textStyle: 'sm',
        },
      },
      md: {
        root: {
          gap: {
            _vertical: '4',
            _horizontal: '6',
          },
        },
        radio: {
          gap: '3',
        },
        radioControl: {
          width: '5',
          height: '5',
          _checked: {
            outlineWidth: '4px',
            outlineOffset: '-5px',
          },
        },
        radioLabel: {
          textStyle: 'md',
        },
      },
      lg: {
        root: {
          gap: {
            _vertical: '5',
            _horizontal: '8',
          },
        },
        radio: {
          gap: '4',
        },
        radioControl: {
          width: '6',
          height: '6',
          _checked: {
            outlineWidth: '5px',
            outlineOffset: '-6px',
          },
        },
        radioLabel: {
          textStyle: 'lg',
        },
      },
    },
  },
})
