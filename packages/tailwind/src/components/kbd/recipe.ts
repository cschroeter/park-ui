import { tv } from 'tailwind-variants'

export const kbdStyles = tv({
  base: 'kbd',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'kbd--size_sm',
      md: 'kbd--size_md',
      lg: 'kbd--size_lg',
    },
  },
})
