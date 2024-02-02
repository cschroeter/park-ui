import { ark, type HTMLArkProps } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { tv, type VariantProps } from 'tailwind-variants'

export interface LinkProps extends LinkVariantProps, HTMLArkProps<'a'> {}

export const Link = (props: LinkProps) => {
  const [variantProps, linkProps] = splitProps(props, ['class'])
  // @ts-expect-error https://github.com/nextui-org/tailwind-variants/issues/145
  return <ark.a class={styles(variantProps)} {...linkProps} />
}

type LinkVariantProps = VariantProps<typeof styles>

const styles = tv({ base: 'link', variants: {} }, { twMerge: false })
