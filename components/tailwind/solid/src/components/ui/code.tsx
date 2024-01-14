import { ark } from '@ark-ui/solid'
import { tv, type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'

type CodeVariantProps = VariantProps<typeof styles>
export type CodeProps = CodeVariantProps & HTMLArkProps<'button'>

const styles = tv({
  base: 'code',
  defaultVariants: { size: 'md', variant: 'outline' },
  variants: {
    variant: { outline: 'code--variant_outline', ghost: 'code--variant_ghost' },
    size: { sm: 'code--size_sm', md: 'code--size_md', lg: 'code--size_lg' },
  },
})
export const Code = styled<CodeProps>(ark.code, styles)
