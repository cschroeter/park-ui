import { ark, type HTMLArkProps } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { tv, type VariantProps } from 'tailwind-variants'

export interface KbdProps extends KbdVariantProps, HTMLArkProps<'kbd'> {}

export const Kbd = (props: KbdProps) => {
  const [variantProps, kbdProps] = splitProps(props, ['class', 'size'])
  // @ts-expect-error https://github.com/nextui-org/tailwind-variants/issues/145
  return <ark.kbd class={styles(variantProps)} {...kbdProps} />
}

type KbdVariantProps = VariantProps<typeof styles>

const styles = tv({
  base: 'kbd',
  defaultVariants: { size: 'md' },
  variants: { size: { sm: 'kbd--size_sm', md: 'kbd--size_md', lg: 'kbd--size_lg' } },
})
