import { checkboxAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const checkbox = defineSlotRecipe({
  className: 'checkbox',
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      alignItems: 'center',
      display: 'flex',
    },
    label: {
      color: 'fg.default',
      fontWeight: 'medium',
    },
    control: {
      alignItems: 'center',
      borderColor: 'border.default',
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
      _indeterminate: {
        background: 'accent.default',
        borderColor: 'border.accent',
        _hover: {
          background: 'accent.default',
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
        control: {
          width: '4',
          height: '4',
          borderRadius: 'l1',
          '& svg': {
            width: '3',
            height: '3',
          },
        },
        label: {
          textStyle: 'sm',
        },
      },
      md: {
        root: {
          gap: '3',
        },
        control: {
          width: '5',
          height: '5',
          borderRadius: 'l1',
          '& svg': {
            width: '3.5',
            height: '3.5',
          },
        },
        label: {
          textStyle: 'md',
        },
      },
      lg: {
        root: {
          gap: '4',
        },
        control: {
          width: '6',
          height: '6',
          borderRadius: 'l1',
          '& svg': {
            width: '4',
            height: '4',
          },
        },
        label: {
          textStyle: 'lg',
        },
      },
    },
  },
})
