import { mergeProps, splitProps } from 'solid-js'
import { styled, type HTMLStyledProps, type StyledComponent } from 'styled-system/jsx'
import { text, type TextVariantProps } from 'styled-system/recipes'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = {
  as?: As
} & TextVariantProps &
  HTMLStyledProps<As>

export const Heading = (props: HeadingProps) => {
  const mergedProps = mergeProps({ as: 'h2' }, props)
  const [localProps, rootProps] = splitProps(mergedProps, ['as'])
  const Dynamic = styled(localProps.as as As, text) as StyledComponent<As>

  return <Dynamic {...rootProps} />
}
