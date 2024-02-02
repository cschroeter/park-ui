import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const styles = tv(
  {
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
  },
  { twMerge: false },
)

type IconButtonVariantProps = VariantProps<typeof styles>
export interface IconButtonProps extends IconButtonVariantProps, HTMLArkProps<'button'> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { size, variant, className, ...rest } = props
  return <ark.button className={styles({ size, variant, className })} ref={ref} {...rest} />
})

IconButton.displayName = 'IconButton'
