import type { PropsWithChildren } from 'react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TypographyProps = PropsWithChildren<{
  as?: As
}> &
  HTMLStyledProps<As>

export const Heading = (props: TypographyProps) => {
  const { as = 'h2', ...rest } = props

  const Component = styled(as)
  return <Component fontWeight="semibold" {...rest} />
}
