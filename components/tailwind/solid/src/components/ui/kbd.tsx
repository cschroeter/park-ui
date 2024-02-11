import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface KbdProps extends KbdVariantProps, HTMLArkProps<'kbd'> {}

export const Kbd = (props: KbdProps) => {
  const [variantProps, kbdProps] = splitProps(props, ['class', 'size'])
  return <ark.kbd class={styles(variantProps)} {...kbdProps} />
}

type KbdVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    base: 'kbd',
    defaultVariants: { size: 'md' },
    variants: { size: { sm: 'kbd--size_sm', md: 'kbd--size_md', lg: 'kbd--size_lg' } },
  },
  { twMerge: false },
)
