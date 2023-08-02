import { radioGroupAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(radioGroupAnatomy.build())

export const radioGroup = defineRecipe({
  className: 'radioGroup',
  description: 'A radio group style',
  base: parts({
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
      transitionDuration: 'fast',
      transitionProperty: 'border-color, background-color',
      _hover: {
        background: 'bg.subtle',
      },
      _checked: {
        background: 'bg.accent',
        borderColor: 'border.accent',
        '--outline-color': {
          base: 'colors.white',
          _dark: 'colors.neutral.950',
        },
        _hover: {
          background: 'bg.accent',
        },
        outlineColor: 'var(--outline-color)',
        outlineStyle: 'solid',
      },
    },
    radio: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
    },
    radioLabel: {
      color: 'fg.emphasized',
      fontWeight: 'medium',
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: parts({
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
      }),
      md: parts({
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
      }),
      lg: parts({
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
      }),
    },
  },
})
