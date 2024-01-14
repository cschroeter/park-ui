import { ark } from '@ark-ui/solid'
import { tv, type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'

type LinkVariantProps = VariantProps<typeof styles>
export type LinkProps = LinkVariantProps & HTMLArkProps<'button'>

const styles = tv({ base: 'link', variants: {} })
export const Link = styled<LinkProps>(ark.a, styles)
