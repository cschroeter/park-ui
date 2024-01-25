import { ark } from '@ark-ui/react/factory'
import { tv, type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'

type KbdVariantProps = VariantProps<typeof styles>
export type KbdProps = KbdVariantProps & HTMLArkProps<'button'>

const styles = tv({
  base: 'kbd',
  defaultVariants: { size: 'md' },
  variants: { size: { sm: 'kbd--size_sm', md: 'kbd--size_md', lg: 'kbd--size_lg' } },
})
export const Kbd = styled<KbdProps>(ark.kbd, styles)
