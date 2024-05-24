import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface BadgeProps extends BadgeVariantProps, HTMLArkProps<'div'> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { size, variant, className, ...rest } = props
  return <ark.div className={badge({ size, variant, className })} ref={ref} {...rest} />
})

Badge.displayName = 'Badge'

type BadgeVariantProps = VariantProps<typeof badge>

const badge = tv(
  {
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
  },
  { twMerge: false },
)
