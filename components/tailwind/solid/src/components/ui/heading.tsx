import { mergeProps, splitProps, type JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { tv, type VariantProps } from 'tailwind-variants'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = {
  as?: As
} & TextVariantProps &
  JSX.IntrinsicElements[As]

export const Heading = (props: HeadingProps) => {
  const mergedProps = mergeProps({ as: 'h2', variant: 'heading' }, props)
  const [variantProps, headingProps] = splitProps(mergedProps, ['size', 'class', 'variant'])
  const [localProps, rootProps] = splitProps(headingProps, ['as'])
  const className = styles({ size: 'sm', variant: 'heading' })
  console.log(className)

  return <Dynamic component={localProps.as} class={className} {...rootProps} />
}

type TextVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    base: 'text',
    variants: {
      variant: { heading: 'text--variant_heading' },
      size: {
        xs: 'text--size_xs',
        sm: 'text--size_sm',
        md: 'text--size_md',
        lg: 'text--size_lg',
        xl: 'text--size_xl',
        '2xl': 'text--size_2xl',
        '3xl': 'text--size_3xl',
        '4xl': 'text--size_4xl',
        '5xl': 'text--size_5xl',
        '6xl': 'text--size_6xl',
        '7xl': 'text--size_7xl',
      },
    },
  },
  { twMerge: false },
)
