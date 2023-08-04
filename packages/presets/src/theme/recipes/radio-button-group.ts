import { radioGroupAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(radioGroupAnatomy.build())

export const radioButtonGroup = defineRecipe({
  className: 'radioButtonGroup',
  description: 'A radio button group style',
  base: parts({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    radio: {
      alignItems: 'center',
      appearance: 'none',
      borderColor: 'border.emphasized',
      borderRadius: 'sm',
      borderWidth: '1px',
      color: 'fg.emphasized',
      cursor: 'pointer',
      display: 'inline-flex',
      fontWeight: 'bold',
      justifyContent: 'center',
      outline: 'none',
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'background-color, border-color, color',
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
        color: 'fg.accent',
        borderColor: 'border.accent',
        background: 'bg.accent',
        _hover: {
          color: 'fg.accent',
          background: 'bg.accent',
        },
      },
      _disabled: {
        borderColor: 'border.disabled',
        color: 'fg.disabled',
        cursor: 'not-allowed',
        backgroundImage:
          'linear-gradient(315deg, transparent 49%, var(--colors-border-disabled) 49%, var(--colors-border-disabled) 51%, transparent 51%)',
        _hover: {
          background: 'transparent',
          backgroundImage:
            'linear-gradient(315deg, transparent 49%, var(--colors-border-disabled) 49%, var(--colors-border-disabled) 51%, transparent 51%)',
          borderColor: 'border.disabled',
          color: 'fg.disabled',
        },
      },
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: parts({
        root: {
          gap: '2',
        },
        radio: {
          h: '9',
          w: '9',
          textStyle: 'sm',
          '& svg': {
            fontSize: 'xl',
          },
        },
      }),
      md: parts({
        root: {
          gap: '3',
        },
        radio: {
          h: '10',
          w: '10',
          textStyle: 'sm',
          '& svg': {
            fontSize: 'xl',
          },
        },
      }),
      lg: parts({
        root: {
          gap: '3',
        },
        radio: {
          h: '11',
          w: '11',
          textStyle: 'md',
          '& svg': {
            fontSize: 'xl',
          },
        },
      }),
      xl: parts({
        root: {
          gap: '3',
        },
        radio: {
          h: '12',
          w: '12',
          textStyle: 'md',
          '& svg': {
            fontSize: 'xl',
          },
        },
      }),
    },
  },
})
