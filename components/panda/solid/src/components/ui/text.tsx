import { mergeProps, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { css, cx } from 'styled-system/css'
import { splitCssProps, type HTMLStyledProps } from 'styled-system/jsx'
import { text, type TextVariantProps } from 'styled-system/recipes'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = TextVariantProps & {
  as?: As
} & HTMLStyledProps<As>

export const Text = (props: TextProps) => {
  const mergedProps = mergeProps({ as: 'p' }, props)
  const [variantProps, textProps] = splitProps(mergedProps, ['size', 'variant'])
  const [cssProps, elementProps] = splitCssProps(textProps)
  const [localProps, rootProps] = splitProps(elementProps, ['as', 'class'])
  const className = text(variantProps)

  return (
    <Dynamic
      component={localProps.as}
      class={cx(className, css(cssProps), localProps.class)}
      {...rootProps}
    />
  )
}
