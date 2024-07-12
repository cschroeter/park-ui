import { ark } from '@ark-ui/react/factory'
import { type ComponentProps, forwardRef } from 'react'
import { styled } from 'styled-system/jsx'
import { icon } from 'styled-system/recipes'

export type IconProps = ComponentProps<typeof StyledIcon>
const StyledIcon = styled(ark.svg, icon)

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <StyledIcon asChild ref={ref} {...props} />
))
