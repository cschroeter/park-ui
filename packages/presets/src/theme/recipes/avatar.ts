import { avatarAnatomy } from '@ark-ui/react'
import { defineParts, defineRecipe } from '@pandacss/dev'

const parts = defineParts(avatarAnatomy.build())

export const avatar = defineRecipe({
  className: 'avatar',
  description: 'An avatar style',
  base: parts({
    root: {
      borderRadius: 'full',
      borderWidth: '1px',
      flexShrink: 0,
    },
    fallback: {
      alignItems: 'center',
      background: 'neutral.900',
      color: 'white',
      display: 'flex',
      fontWeight: 'semibold',
      height: 'inherit',
      justifyContent: 'center',
    },
    image: {
      objectFit: 'cover',
    },
  }),
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      xs: parts({
        root: {
          height: '8',
          width: '8',
        },
        fallback: {
          textStyle: 'xs',
        },
      }),
      sm: parts({
        root: {
          height: '9',
          width: '9',
        },
        fallback: {
          textStyle: 'sm',
        },
      }),
      md: parts({
        root: {
          height: '10',
          width: '10',
        },
        fallback: {
          textStyle: 'md',
        },
      }),
      lg: parts({
        root: {
          height: '11',
          width: '11',
        },
        fallback: {
          textStyle: 'lg',
        },
      }),
      xl: parts({
        root: {
          height: '12',
          width: '12',
        },
        fallback: {
          textStyle: 'xl',
        },
      }),
      '2xl': parts({
        root: {
          height: '16',
          width: '16',
        },
        fallback: {
          textStyle: '2xl',
        },
      }),
    },
  },
})
