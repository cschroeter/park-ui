import { tagsInputAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(tagsInputAnatomy.build())

export const tagsInput = defineRecipe({
  className: 'tagsInput',
  description: 'A tags input style',
  base: parts({
    root: {
      width: 'full',
      display: 'flex',
      flexDirection: 'column',
    },
    control: {
      alignItems: 'center',
      borderColor: 'border.emphasized',
      borderRadius: 'sm',
      borderWidth: '1px',
      display: 'flex',
      flexWrap: 'wrap',
      outline: 0,
      transitionDuration: 'normal',
      transitionProperty: 'border-color, box-shadow',
      transitionTimingFunction: 'default',
      _focusWithin: {
        borderColor: 'border.outline',
        boxShadow: 'outline',
      },
    },
    input: {
      outline: 'none',
      background: 'transparent',
    },
    tag: {
      alignItems: 'center',
      borderColor: 'border.emphasized',
      borderRadius: 'xs',
      borderWidth: '1px',
      color: 'fg.emphasized',
      background: 'bg.subtle',
      display: 'inline-flex',
      fontWeight: 'medium',
      _highlighted: {
        borderColor: 'border.outline',
      },
      _hidden: {
        display: 'none',
      },
    },
    tagInput: {
      background: 'transparent',
      outline: 'none',
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      md: parts({
        root: {
          gap: '1.5',
        },
        control: {
          fontSize: 'md',
          gap: '1.5',
          minW: '10',
          px: '3',
          py: '7px', // TODO line break
        },
        tag: {
          gap: '1',
          h: '6',
          pe: '1',
          ps: '2',
          textStyle: 'sm',
        },
      }),
    },
  },
})
