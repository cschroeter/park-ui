import { createElement } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = {
  as?: As
} & TextVariantProps &
  JSX.IntrinsicElements[As]

export const Text = (props: TextProps) => {
  const { as = 'p', size, className, ...elementProps } = props
  const classes = text({ size, className })

  return createElement(as, {
    className: classes,
    ...elementProps,
  })
}

type TextVariantProps = VariantProps<typeof text>

const text = tv(
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
