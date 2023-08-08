import { checkboxAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(checkboxAnatomy.build())

export const checkbox = defineRecipe({
  className: 'checkbox',
  description: 'A checkbox style',
  base: parts({
    root: {
      alignItems: 'center',
      display: 'flex',
    },
    label: {
      color: 'fg.emphasized',
      fontWeight: 'medium',
    },
    control: {
      alignItems: 'center',
      borderColor: 'border.emphasized',
      borderWidth: '1px',
      color: 'accent.fg',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, background',
      transitionTimingFunction: 'default',
      _hover: {
        background: 'bg.subtle',
      },
      _checked: {
        background: 'accent.default',
        borderColor: 'border.accent',
        _hover: {
          background: 'accent.default',
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
        control: {
          width: '4',
          height: '4',
          borderRadius: 'sm',
          '& svg': {
            width: '3',
            height: '3',
          },
        },
        label: {
          textStyle: 'sm',
        },
      }),
      md: parts({
        root: {
          gap: '3',
        },
        control: {
          width: '5',
          height: '5',
          borderRadius: 'sm',
          '& svg': {
            width: '3.5',
            height: '3.5',
          },
        },
        label: {
          textStyle: 'md',
        },
      }),
      lg: parts({
        root: {
          gap: '4',
        },
        control: {
          width: '6',
          height: '6',
          borderRadius: 'sm',
          '& svg': {
            width: '4',
            height: '4',
          },
        },
        label: {
          textStyle: 'lg',
        },
      }),
    },
  },
})
