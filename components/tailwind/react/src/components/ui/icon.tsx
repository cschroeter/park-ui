import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface IconProps extends IconVariantProps, HTMLArkProps<'svg'> {}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size, className, ...otherProps } = props
  return <ark.svg asChild className={icon({ size, className })} ref={ref} {...otherProps} />
})

Icon.displayName = 'Icon'

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
