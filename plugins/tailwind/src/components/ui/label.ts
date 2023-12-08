import { ark, type HTMLArkProps } from '@ark-ui/react'
import { tv, type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'

type LabelVariantProps = VariantProps<typeof styles>
export type LabelProps = LabelVariantProps & HTMLArkProps<'button'>

const styles = tv({
  base: 'label',
  defaultVariants: { size: 'md' },
  variants: {
    size: {
      sm: 'label--size_sm',
      md: 'label--size_md',
      lg: 'label--size_lg',
      xl: 'label--size_xl',
    },
  },
})
export const Label = styled<LabelProps>(ark.label, styles)
