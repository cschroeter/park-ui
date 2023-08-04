import { switchAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(switchAnatomy.build())

export const switchRecipe = defineRecipe({
  className: 'switchRecipe',
  description: 'A switch style',
  base: parts({
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
      transitionProperty: 'background-color',
      transitionTimingFunction: 'default',
      _checked: {
        background: 'bg.accent',
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
      transitionProperty: 'transform, background-color',
      transitionTimingFunction: 'default',
      zIndex: '1',
      _checked: {
        transform: 'translateX(100%)',
        background: 'bg.default',
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
      }),
      md: parts({
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
      }),
      lg: parts({
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
      }),
    },
  },
})
