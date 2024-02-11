import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface CodeProps extends CodeVariantProps, HTMLArkProps<'code'> {}

export const Code = (props: CodeProps) => {
  const [variantProps, codeProps] = splitProps(props, ['class', 'size'])
  return <ark.code class={styles(variantProps)} {...codeProps} />
}

type CodeVariantProps = VariantProps<typeof styles>

const styles = tv(
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
