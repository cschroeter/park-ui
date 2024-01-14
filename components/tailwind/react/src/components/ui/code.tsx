import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const styles = tv({
  base: 'code',
  defaultVariants: { size: 'md', variant: 'outline' },
  variants: {
    variant: { outline: 'code--variant_outline', ghost: 'code--variant_ghost' },
    size: { sm: 'code--size_sm', md: 'code--size_md', lg: 'code--size_lg' },
  },
})

type CodeVariantProps = VariantProps<typeof styles>
export interface CodeProps extends CodeVariantProps, HTMLArkProps<'code'> {}

export const Code = forwardRef<HTMLElement, CodeProps>((props, ref) => {
  const { size, variant, className, ...rest } = props
  return <ark.code className={styles({ size, variant, className })} ref={ref} {...rest} />
})

Code.displayName = 'Code'
