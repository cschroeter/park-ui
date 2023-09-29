import type { PropsWithChildren } from 'react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'

type As = 'p' | 'span' | 'div'

type TypographyProps = PropsWithChildren<{
  as?: As
}> &
  HTMLStyledProps<As>

export const Text = (props: TypographyProps) => {
  const { as = 'p', ...rest } = props

  const Component = styled(as)
  return <Component {...rest} />
}
