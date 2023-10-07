import { tv } from 'tailwind-variants'

export const labelStyles = tv({
  base: 'label',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'label--size_sm',
      md: 'label--size_md',
      lg: 'label--size_lg',
      xl: 'label--size_xl',
    },
  },
})
