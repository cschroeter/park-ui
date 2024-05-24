import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface ButtonProps extends ButtonVariantProps, HTMLArkProps<'button'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size, variant, className, ...buttonProps } = props
  return <ark.button className={button({ size, variant, className })} ref={ref} {...buttonProps} />
})

Button.displayName = 'Button'

type ButtonVariantProps = VariantProps<typeof button>

const button = tv(
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
