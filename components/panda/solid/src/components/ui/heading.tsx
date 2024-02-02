import { mergeProps, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { css, cx } from 'styled-system/css'
import { splitCssProps, type HTMLStyledProps } from 'styled-system/jsx'
import { text, type TextVariantProps } from 'styled-system/recipes'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = TextVariantProps & {
  as?: As
} & HTMLStyledProps<As>

export const Heading = (props: HeadingProps) => {
  const mergedProps = mergeProps({ as: 'h2' }, props)
  const [variantProps, headingProps] = splitProps(mergedProps, ['size'])
  const [cssProps, elementProps] = splitCssProps(headingProps)
  const [localProps, rootProps] = splitProps(elementProps, ['as', 'class'])
  const className = text({ variant: 'heading', size: variantProps.size })

  return (
    <Dynamic
      component={localProps.as}
      class={cx(className, css(cssProps), localProps.class)}
      {...rootProps}
    />
  )
}
