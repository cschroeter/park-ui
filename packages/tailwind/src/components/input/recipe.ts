import { tv } from 'tailwind-variants'

export const inputStyles = tv({
  base: 'input',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      '2xs': 'input--size_2xs',
      xs: 'input--size_xs',
      sm: 'input--size_sm',
      md: 'input--size_md',
      lg: 'input--size_lg',
      xl: 'input--size_xl',
      '2xl': 'input--size_2xl',
    },
  },
})
