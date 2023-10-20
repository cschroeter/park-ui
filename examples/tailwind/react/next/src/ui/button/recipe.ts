import { tv } from 'tailwind-variants'

export const buttonStyles = tv({
  base: 'button',
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
  variants: {
    variant: {
      solid: 'button--variant_solid',
      outline: 'button--variant_outline',
      ghost: 'button--variant_ghost',
      link: 'button--variant_link',
    },
    size: {
      xs: 'button--size_xs',
      sm: 'button--size_sm',
      md: 'button--size_md',
      lg: 'button--size_lg',
      xl: 'button--size_xl',
      '2xl': 'button--size_2xl',
    },
  },
})
