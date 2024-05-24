import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface CodeProps extends CodeVariantProps, HTMLArkProps<'code'> {}

export const Code = forwardRef<HTMLElement, CodeProps>((props, ref) => {
  const { size, variant, className, ...rest } = props
  return <ark.code className={code({ size, variant, className })} ref={ref} {...rest} />
})

Code.displayName = 'Code'

type CodeVariantProps = VariantProps<typeof code>

const code = tv(
  {
    base: 'code',
    defaultVariants: { size: 'md', variant: 'outline' },
    variants: {
      variant: { outline: 'code--variant_outline', ghost: 'code--variant_ghost' },
      size: { sm: 'code--size_sm', md: 'code--size_md', lg: 'code--size_lg' },
    },
  },
  { twMerge: false },
)
