import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const styles = tv({
  base: 'kbd',
  defaultVariants: { size: 'md' },
  variants: { size: { sm: 'kbd--size_sm', md: 'kbd--size_md', lg: 'kbd--size_lg' } },
})

type KbdVariantProps = VariantProps<typeof styles>
export interface KbdProps extends KbdVariantProps, HTMLArkProps<'kbd'> {}

export const Kbd = forwardRef<HTMLElement, KbdProps>((props, ref) => {
  const { size, className, ...rest } = props
  return <ark.kbd className={styles({ size, className })} ref={ref} {...rest} />
})

Kbd.displayName = 'Kbd'
