import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export interface LinkProps extends LinkVariantProps, HTMLArkProps<'a'> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { className, ...rest } = props
  return <ark.a className={styles({ className })} ref={ref} {...rest} />
})

Link.displayName = 'Link'

type LinkVariantProps = VariantProps<typeof styles>

const styles = tv({ base: 'link', variants: {} }, { twMerge: false })
