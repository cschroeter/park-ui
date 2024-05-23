import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface FormLabelProps extends FormLabelVariantProps, HTMLArkProps<'label'> {}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
  const { size, className, ...rest } = props
  return <ark.label className={formLabel({ size, className })} ref={ref} {...rest} />
})

FormLabel.displayName = 'FormLabel'

type FormLabelVariantProps = VariantProps<typeof formLabel>

const formLabel = tv(
  {
    base: 'formLabel',
    defaultVariants: { size: 'md' },
    variants: {
      size: {
        sm: 'formLabel--size_sm',
        md: 'formLabel--size_md',
        lg: 'formLabel--size_lg',
        xl: 'formLabel--size_xl',
      },
    },
  },
  { twMerge: false },
)
