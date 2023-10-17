import { ark } from '@ark-ui/react'
import { styled } from '../../lib/styled'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = {
  as?: As
} & any // TODO textStyle, fontWeight, color, needed for hover-card demo...

export const Text = (props: TextProps) => {
  const { as = 'p', ...rest } = props
  const Component = styled(ark[as], () => ({}))

  return <Component {...rest} />
}
