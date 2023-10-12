import { switchAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const switchRecipe = defineSlotRecipe({
  className: 'switchRecipe',
  slots: switchAnatomy.keys(),
  jsx: ['Switch', /Switch\.+/],
  base: {
    root: {
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
    },
    control: {
      alignItems: 'center',
      background: 'bg.muted',
      borderRadius: 'full',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: '0',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      _checked: {
        background: 'accent.default',
      },
    },
    label: {
      userSelect: 'none',
      textStyle: 'md',
      fontWeight: 'medium',
    },
    thumb: {
      background: 'bg.default',
      borderRadius: 'full',
      boxShadow: 'xs',
      transitionDuration: 'normal',
      transitionProperty: 'transform, background',
      transitionTimingFunction: 'default',
      zIndex: '1',
      _checked: {
        transform: 'translateX(100%)',
        background: 'bg.default',
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
          width: '7',
          p: '0.5',
        },
        thumb: {
          width: '3',
          height: '3',
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
          width: '9',
          p: '0.5',
        },
        thumb: {
          width: '4',
          height: '4',
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
          width: '11',
          p: '0.5',
        },
        thumb: {
          width: '5',
          height: '5',
        },
        label: {
          textStyle: 'lg',
        },
      },
    },
  },
})
