import { tv } from 'tailwind-variants'

export const badgeStyles = tv({
  base: 'badge',
  defaultVariants: {
    variant: 'subtle',
    size: 'md',
  },
  variants: {
    variant: {
      solid: 'badge--variant_solid',
      subtle: 'badge--variant_subtle',
      outline: 'badge--variant_outline',
    },
    size: {
      sm: 'badge--size_sm',
      md: 'badge--size_md',
      lg: 'badge--size_lg',
    },
  },
})
