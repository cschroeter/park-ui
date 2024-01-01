import { avatarAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const avatar = defineSlotRecipe({
  className: 'avatar',
  slots: avatarAnatomy.keys(),
  base: {
    root: {
      borderRadius: 'full',
      borderWidth: '1px',
      flexShrink: 0,
    },
    fallback: {
      alignItems: 'center',
      background: 'bg.subtle',
      display: 'flex',
      fontWeight: 'semibold',
      height: 'inherit',
      justifyContent: 'center',
      _hidden: {
        display: 'none',
      },
    },
    image: {
      objectFit: 'cover',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      xs: {
        root: {
          height: '8',
          width: '8',
        },
        image: {
          height: '8',
          width: '8',
        },
        fallback: {
          textStyle: 'xs',
        },
      },
      sm: {
        root: {
          height: '9',
          width: '9',
        },
        image: {
          height: '9',
          width: '9',
        },
        fallback: {
          textStyle: 'sm',
        },
      },
      md: {
        root: {
          height: '10',
          width: '10',
        },
        image: {
          height: '10',
          width: '10',
        },
        fallback: {
          textStyle: 'md',
        },
      },
      lg: {
        root: {
          height: '11',
          width: '11',
        },
        image: {
          height: '11',
          width: '11',
        },
        fallback: {
          textStyle: 'lg',
        },
      },
      xl: {
        root: {
          height: '12',
          width: '12',
        },
        image: {
          height: '12',
          width: '12',
        },
        fallback: {
          textStyle: 'xl',
        },
      },
      '2xl': {
        root: {
          height: '16',
          width: '16',
        },
        image: {
          height: '16',
          width: '16',
        },
        fallback: {
          textStyle: '2xl',
        },
      },
    },
  },
})
