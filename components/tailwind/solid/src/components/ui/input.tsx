import { ark, type HTMLArkProps } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { tv, type VariantProps } from 'tailwind-variants'

export interface InputProps extends Omit<HTMLArkProps<'input'>, 'size'>, InputVariantProps {}

export const Input = (props: InputProps) => {
  const [variantProps, inputProps] = splitProps(props, ['class', 'size'])
  // @ts-expect-error https://github.com/nextui-org/tailwind-variants/issues/145
  return <ark.input class={styles(variantProps)} {...inputProps} />
}

type InputVariantProps = VariantProps<typeof styles>

const styles = tv({
  base: 'input',
  defaultVariants: { size: 'md' },
  variants: {
    size: {
      '2xs': 'input--size_2xs',
      xs: 'input--size_xs',
      sm: 'input--size_sm',
      md: 'input--size_md',
      lg: 'input--size_lg',
      xl: 'input--size_xl',
      '2xl': 'input--size_2xl',
    },
  },
})
