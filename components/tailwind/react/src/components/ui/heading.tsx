import { createElement } from 'react'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = {
  as?: As
} & JSX.IntrinsicElements[As]

export const Heading = (props: HeadingProps) => {
  const { as = 'h2', ...localProps } = props
  return createElement(as, localProps)
}
