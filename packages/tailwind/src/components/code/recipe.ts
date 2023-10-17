import { tv } from 'tailwind-variants'

export const codeStyles = tv({
  base: 'code',
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: 'code--variant_outline',
      ghost: 'code--variant_ghost',
    },
    size: {
      sm: 'code--size_sm',
      md: 'code--size_md',
      lg: 'code--size_lg',
    },
  },
})
