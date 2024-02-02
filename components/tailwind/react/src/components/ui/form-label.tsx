import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export interface FormLabelProps extends FormLabelVariantProps, HTMLArkProps<'label'> {}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
  const { size, className, ...rest } = props
  return <ark.label className={styles({ size, className })} ref={ref} {...rest} />
})

FormLabel.displayName = 'FormLabel'

type FormLabelVariantProps = VariantProps<typeof styles>

const styles = tv(
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
