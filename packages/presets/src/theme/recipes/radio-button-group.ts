import { radioGroupAnatomy } from '@ark-ui/react'
import { defineSlotRecipe } from '@pandacss/dev'

export const radioButtonGroup = defineSlotRecipe({
  className: 'radioButtonGroup',
  description: 'A radio button group style',
  slots: radioGroupAnatomy.keys(),
  base: {
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
      fontWeight: 'semibold',
      justifyContent: 'center',
      outline: 'none',
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'background, border-color, color',
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
        color: 'accent.fg',
        borderColor: 'border.accent',
        background: 'accent.default',
        _hover: {
          color: 'accent.fg',
          background: 'accent.default',
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
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
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
      },
      md: {
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
      },
      lg: {
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
      },
      xl: {
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
      },
    },
  },
})
