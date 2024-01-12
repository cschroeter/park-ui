import { mergeProps, splitProps } from 'solid-js'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = {
  as?: As
} & HTMLStyledProps<any>

export const Text = (props: TextProps) => {
  const mergedProps = mergeProps({ as: 'p' }, props)
  const [local, rootProps] = splitProps(mergedProps, ['as'])
  const Dynamic = styled(local.as as As)

  return <Dynamic {...rootProps} />
}
