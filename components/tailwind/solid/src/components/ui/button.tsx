import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface ButtonProps extends ButtonVariantProps, HTMLArkProps<'button'> {}

export const Button = (props: ButtonProps) => {
  const [variantProps, buttonProps] = splitProps(props, ['class', 'size', 'variant'])
  return <ark.button class={styles(variantProps)} {...buttonProps} />
}

type ButtonVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
    base: 'button',
    defaultVariants: { variant: 'solid', size: 'md' },
    variants: {
      variant: {
        solid: 'button--variant_solid',
        outline: 'button--variant_outline',
        ghost: 'button--variant_ghost',
        link: 'button--variant_link',
        subtle: 'button--variant_subtle',
      },
      size: {
        xs: 'button--size_xs',
        sm: 'button--size_sm',
        md: 'button--size_md',
        lg: 'button--size_lg',
        xl: 'button--size_xl',
        '2xl': 'button--size_2xl',
      },
    },
  },
  { twMerge: false },
)
