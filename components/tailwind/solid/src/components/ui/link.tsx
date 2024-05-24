import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface LinkProps extends LinkVariantProps, HTMLArkProps<'a'> {}

export const Link = (props: LinkProps) => {
  const [variantProps, linkProps] = splitProps(props, ['class'])
  return <ark.a class={link(variantProps)} {...linkProps} />
}

type LinkVariantProps = VariantProps<typeof link>

const link = tv({ base: 'link', variants: {} }, { twMerge: false })
