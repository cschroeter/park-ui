import { forwardRef, useMemo } from 'react'
import { type HTMLStyledProps, type StyledComponent, styled } from 'styled-system/jsx'
import { type TextVariantProps, text } from 'styled-system/recipes'

type As = 'p' | 'span' | 'div' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TextProps = {
  as?: As
} & TextVariantProps &
  HTMLStyledProps<As>

export const Text = forwardRef<HTMLHeadingElement, TextProps>((props, ref) => {
  const { as = 'p', ...localProps } = props
  const Dynamic = useMemo(() => styled(as, text) as StyledComponent<As>, [as])

  return <Dynamic ref={ref} {...localProps} />
})

Text.displayName = 'Text'
