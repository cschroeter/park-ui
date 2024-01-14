import { ark } from '@ark-ui/solid'
import { tv, type VariantProps } from 'tailwind-variants'
import { styled } from '~/lib/styled'

type TextareaVariantProps = VariantProps<typeof styles>
export type TextareaProps = TextareaVariantProps & HTMLArkProps<'button'>

const styles = tv({
  base: 'textarea',
  defaultVariants: { size: 'md' },
  variants: {
    size: {
      sm: 'textarea--size_sm',
      md: 'textarea--size_md',
      lg: 'textarea--size_lg',
      xl: 'textarea--size_xl',
    },
  },
})
export const Textarea = styled<TextareaProps>(ark.textarea, styles)
