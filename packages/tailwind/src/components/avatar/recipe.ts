import { tv } from 'tailwind-variants'

export const avatarStyles = tv({
  base: 'avatar',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'avatar__root',
    image: 'avatar__image',
    fallback: 'avatar__fallback',
  },
  variants: {
    size: {
      xs: {
        root: 'avatar__root--size_xs',
        image: 'avatar__image--size_xs',
        fallback: 'avatar__fallback--size_xs',
      },
      sm: {
        root: 'avatar__root--size_sm',
        image: 'avatar__image--size_sm',
        fallback: 'avatar__fallback--size_sm',
      },
      md: {
        root: 'avatar__root--size_md',
        image: 'avatar__image--size_md',
        fallback: 'avatar__fallback--size_md',
      },
      lg: {
        root: 'avatar__root--size_lg',
        image: 'avatar__image--size_lg',
        fallback: 'avatar__fallback--size_lg',
      },
      xl: {
        root: 'avatar__root--size_xl',
        image: 'avatar__image--size_xl',
        fallback: 'avatar__fallback--size_xl',
      },
      '2xl': {
        root: 'avatar__root--size_2xl',
        image: 'avatar__image--size_2xl',
        fallback: 'avatar__fallback--size_2xl',
      },
    },
  },
})
