import { createElement } from 'react'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = {
  as?: As
} & JSX.IntrinsicElements[As]

export const Text = (props: TextProps) => {
  const { as = 'p', ...localProps } = props
  return createElement(as, localProps)
}
