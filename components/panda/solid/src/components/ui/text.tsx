import { mergeProps, splitProps } from 'solid-js'
import { styled, type HTMLStyledProps, type StyledComponent } from 'styled-system/jsx'
import { text, type TextVariantProps } from 'styled-system/recipes'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = {
  as?: As
} & TextVariantProps &
  HTMLStyledProps<As>

export const Text = (props: TextProps) => {
  const mergedProps = mergeProps({ as: 'p' }, props)
  const [localProps, rootProps] = splitProps(mergedProps, ['as'])

  const Dynamic = styled(localProps.as as As, text) as StyledComponent<As>

  return <Dynamic {...rootProps} />
}
