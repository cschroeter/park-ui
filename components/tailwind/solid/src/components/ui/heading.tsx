import { mergeProps, splitProps, type JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = {
  as?: As
} & JSX.IntrinsicElements[As]

export const Heading = (props: HeadingProps) => {
  const mergedProps = mergeProps({ as: 'h2' }, props)
  const [localProps, rootProps] = splitProps(mergedProps, ['as'])

  return <Dynamic component={localProps.as} {...rootProps} />
}
