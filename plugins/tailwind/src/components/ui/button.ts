import { ark, type HTMLArkProps } from '@ark-ui/react'
import { tv, type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'

type ButtonVariantProps = VariantProps<typeof styles>
export type ButtonProps = ButtonVariantProps & HTMLArkProps<'button'>

const styles = tv({
  base: 'button',
  defaultVariants: { variant: 'solid', size: 'md' },
  variants: {
    variant: {
      solid: 'button--variant_solid',
      outline: 'button--variant_outline',
      ghost: 'button--variant_ghost',
      link: 'button--variant_link',
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
})
export const Button = styled<ButtonProps>(ark.button, styles)
