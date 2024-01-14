import { ark } from '@ark-ui/react/factory'
import { tv, type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'

type IconButtonVariantProps = VariantProps<typeof styles>
export type IconButtonProps = IconButtonVariantProps & HTMLArkProps<'button'>

const styles = tv({
  base: 'iconButton',
  defaultVariants: { variant: 'solid', size: 'md' },
  variants: {
    variant: {
      solid: 'iconButton--variant_solid',
      outline: 'iconButton--variant_outline',
      ghost: 'iconButton--variant_ghost',
      link: 'iconButton--variant_link',
      subtle: 'iconButton--variant_subtle',
    },
    size: {
      xs: 'iconButton--size_xs',
      sm: 'iconButton--size_sm',
      md: 'iconButton--size_md',
      lg: 'iconButton--size_lg',
      xl: 'iconButton--size_xl',
      '2xl': 'iconButton--size_2xl',
    },
  },
})
export const IconButton = styled<IconButtonProps>(ark.button, styles)
