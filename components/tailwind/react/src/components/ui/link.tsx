import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface LinkProps extends LinkVariantProps, HTMLArkProps<'a'> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { className, ...otherProps } = props
  return <ark.a className={link({ className })} ref={ref} {...otherProps} />
})

Link.displayName = 'Link'

type LinkVariantProps = VariantProps<typeof link>

const link = tv({ base: 'link', variants: {} }, { twMerge: false })
