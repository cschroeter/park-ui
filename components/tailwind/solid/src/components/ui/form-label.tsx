import { ark } from '@ark-ui/solid'
import { tv, type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'

type FormLabelVariantProps = VariantProps<typeof styles>
export type FormLabelProps = FormLabelVariantProps & HTMLArkProps<'button'>

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
export const FormLabel = styled<FormLabelProps>(ark.label, styles)
