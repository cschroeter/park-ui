import { ark } from '@ark-ui/react/factory'
import { type ReactElement, forwardRef } from 'react'
import { type HTMLStyledProps, styled } from 'styled-system/jsx'
import { type IconVariantProps, icon } from 'styled-system/recipes'

export interface IconProps extends IconVariantProps, HTMLStyledProps<'svg'> {
  children: ReactElement
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <StyledIcon ref={ref} asChild {...props} />
})

const StyledIcon = styled(ark.svg, icon)
