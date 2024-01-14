import { ark, type HTMLArkProps } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { tv, type VariantProps } from 'tailwind-variants'

export interface FormLabelProps extends FormLabelVariantProps, HTMLArkProps<'label'> {}

export const FormLabel = (props: FormLabelProps) => {
  const [variantProps, formLabelProps] = splitProps(props, ['class', 'size'])
  return <ark.label class={styles(variantProps)} {...formLabelProps} />
}

type FormLabelVariantProps = VariantProps<typeof styles>

const styles = tv({
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
})
