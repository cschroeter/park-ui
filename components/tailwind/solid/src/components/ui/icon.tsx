import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface IconProps extends IconVariantProps, HTMLArkProps<'svg'> {}

export const Icon = (props: IconProps) => {
  const [variantProps, buttonProps] = splitProps(props, ['class', 'size'])
  return <ark.svg class={icon(variantProps)} {...buttonProps} />
}

type IconVariantProps = VariantProps<typeof icon>

const icon = tv(
  {
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
  },
  { twMerge: false },
)
