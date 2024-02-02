import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export interface InputProps extends InputVariantProps, Omit<HTMLArkProps<'input'>, 'size'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { size, className, ...rest } = props
  return <ark.input className={styles({ size, className })} ref={ref} {...rest} />
})

Input.displayName = 'Input'

type InputVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
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
  },
  { twMerge: false },
)
