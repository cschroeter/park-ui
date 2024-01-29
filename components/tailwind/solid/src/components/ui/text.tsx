import { mergeProps, splitProps, type JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = {
  as?: As
} & JSX.IntrinsicElements[As]

export const Text = (props: TextProps) => {
  const mergedProps = mergeProps({ as: 'p' }, props)
  const [localProps, rootProps] = splitProps(mergedProps, ['as'])

  return <Dynamic component={localProps.as} {...rootProps} />
}
