import { tagsInputAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const tagsInput = defineSlotRecipe({
  className: 'tagsInput',
  slots: tagsInputAnatomy.keys(),
  base: {
    root: {
      width: 'full',
      display: 'flex',
      flexDirection: 'column',
    },
    control: {
      alignItems: 'center',
      borderColor: 'border.default',
      borderRadius: 'l2',
      borderWidth: '1px',
      display: 'flex',
      flexWrap: 'wrap',
      outline: 0,
      transitionDuration: 'normal',
      transitionProperty: 'border-color, box-shadow',
      transitionTimingFunction: 'default',
      _focusWithin: {
        borderColor: 'border.accent',
        boxShadow: 'accent',
      },
    },
    input: {
      outline: 'none',
      background: 'transparent',
    },
    item: {
      alignItems: 'center',
      borderColor: 'border.default',
      borderRadius: 'l1',
      borderWidth: '1px',
      color: 'fg.default',
      background: 'bg.subtle',
      display: 'inline-flex',
      fontWeight: 'medium',
      _highlighted: {
        borderColor: 'border.accent',
        boxShadow: 'accent',
      },
      _hidden: {
        display: 'none',
      },
    },
    itemInput: {
      background: 'transparent',
      outline: 'none',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      md: {
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
      },
    },
  },
})
