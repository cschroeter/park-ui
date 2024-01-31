import { ark } from '@ark-ui/solid'
import { type JSX } from 'solid-js'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { icon, type IconVariantProps } from 'styled-system/recipes'

export interface IconProps extends IconVariantProps, HTMLStyledProps<'svg'> {
  children: JSX.Element
}

export const Icon = (props: IconProps) => {
  return <StyledIcon {...props} />
}

const StyledIcon = styled(ark.svg, icon)
