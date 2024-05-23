import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface KbdProps extends KbdVariantProps, HTMLArkProps<'kbd'> {}

export const Kbd = forwardRef<HTMLElement, KbdProps>((props, ref) => {
  const { size, className, ...rest } = props
  return <ark.kbd className={kbd({ size, className })} ref={ref} {...rest} />
})

Kbd.displayName = 'Kbd'

type KbdVariantProps = VariantProps<typeof kbd>

const kbd = tv(
  {
    base: 'kbd',
    defaultVariants: { size: 'md' },
    variants: { size: { sm: 'kbd--size_sm', md: 'kbd--size_md', lg: 'kbd--size_lg' } },
  },
  { twMerge: false },
)
