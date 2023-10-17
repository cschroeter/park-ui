import { ark, type HTMLArkProps } from '@ark-ui/react'
import { VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'
import { iconStyles } from './recipe'

type IconVariantProps = VariantProps<typeof iconStyles>
export type IconProps = IconVariantProps & HTMLArkProps<'svg'>

export const StyledIcon = styled<IconProps>(ark.svg, iconStyles)

export const Icon = (props: IconProps) => {
  return <StyledIcon asChild {...props} />
}
