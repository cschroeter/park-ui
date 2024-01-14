import { ark } from '@ark-ui/solid'
import { tv, type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'

type BadgeVariantProps = VariantProps<typeof styles>
export type BadgeProps = BadgeVariantProps & HTMLArkProps<'button'>

const styles = tv({
  base: 'badge',
  defaultVariants: { variant: 'subtle', size: 'md' },
  variants: {
    variant: {
      solid: 'badge--variant_solid',
      subtle: 'badge--variant_subtle',
      outline: 'badge--variant_outline',
    },
    size: { sm: 'badge--size_sm', md: 'badge--size_md', lg: 'badge--size_lg' },
  },
})
export const Badge = styled<BadgeProps>(ark.div, styles)
