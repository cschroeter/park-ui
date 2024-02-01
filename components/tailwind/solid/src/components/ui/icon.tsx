import type { HTMLArkProps } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { tv, type VariantProps } from 'tailwind-variants'

export interface IconProps extends IconVariantProps, HTMLArkProps<'svg'> {}

export const Icon = (props: IconProps) => {
  const [variantProps, iconProps] = splitProps(props, ['size', 'class'])
  const [localProps, rootProps] = splitProps(iconProps, ['as'])
  // @ts-expect-error https://github.com/nextui-org/tailwind-variants/issues/145
  const className = styles(variantProps)

  return <Dynamic component={localProps.as} class={className} {...rootProps} />
}

type IconVariantProps = VariantProps<typeof styles>

const styles = tv({
  base: 'icon',
  defaultVariants: { size: 'md' },
  variants: {
    size: {
      xs: 'icon--size_xs',
      sm: 'icon--size_sm',
      md: 'icon--size_md',
      lg: 'icon--size_lg',
      xl: 'icon--size_xl',
      '2xl': 'icon--size_2xl',
    },
  },
})
