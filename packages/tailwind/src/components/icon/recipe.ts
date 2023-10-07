import { tv } from 'tailwind-variants'

export const iconStyles = tv({
  base: 'icon',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      xs: 'icon--size_xs',
      sm: 'icon--size_sm',
      md: 'icon--size_md',
      lg: 'icon--size_lg',
      xl: 'icon--size_xl',
      '2xl': 'icon--size_2xl',
    },
  },
})
