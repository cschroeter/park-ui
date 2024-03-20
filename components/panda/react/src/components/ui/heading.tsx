import { forwardRef, useMemo } from 'react'
import { type HTMLStyledProps, type StyledComponent, styled } from 'styled-system/jsx'
import { type TextVariantProps, text } from 'styled-system/recipes'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = {
  as?: As
} & TextVariantProps &
  HTMLStyledProps<As>

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { as = 'h2', ...localProps } = props
  const Dynamic = useMemo(() => styled(as, text) as StyledComponent<As>, [as])

  return <Dynamic ref={ref} {...localProps} />
})

Heading.displayName = 'Heading'
