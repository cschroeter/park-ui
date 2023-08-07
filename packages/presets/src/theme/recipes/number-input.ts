import { numberInputAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(numberInputAnatomy.build())

export const numberInput = defineRecipe({
  className: 'numberInput',
  description: 'A number input style',
  base: parts({
    root: {
      borderColor: 'border.emphasized',
      borderRadius: 'sm',
      borderWidth: '1px',
      display: 'flex',
      overflow: 'hidden',
      width: 'full',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, outline-color',
      transitionTimingFunction: 'default',
      _focusWithin: {
        borderColor: 'border.outline',
        outline: '1px solid',
        outlineColor: 'border.outline',
      },
    },
    control: {
      borderLeftWidth: '1px',
      borderColor: 'border.emphasized',
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      outline: 'none',
      background: 'transparent',
      width: 'full',
    },
    decrementTrigger: {
      borderRadius: 'unset',
    },
    incrementTrigger: {
      borderRadius: 'unset',
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      md: parts({
        root: {
          ps: '3',
          h: '10',
          minW: '10',
          fontSize: 'md',
        },
      }),
      lg: parts({
        root: {
          ps: '3.5',
          h: '11',
          minW: '11',
          fontSize: 'md',
        },
      }),
      xl: parts({
        root: {
          ps: '4',
          h: '12',
          minW: '12',
          fontSize: 'lg',
        },
      }),
    },
  },
})
