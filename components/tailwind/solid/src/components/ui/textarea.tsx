import { type HTMLArkProps, ark } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'

export interface TextareaProps extends TextareaVariantProps, HTMLArkProps<'textarea'> {}

export const Textarea = (props: TextareaProps) => {
  const [variantProps, textareaProps] = splitProps(props, ['class', 'size'])
  return <ark.textarea class={styles(variantProps)} {...textareaProps} />
}

type TextareaVariantProps = VariantProps<typeof styles>

const styles = tv(
  {
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
  },
  { twMerge: false },
)
