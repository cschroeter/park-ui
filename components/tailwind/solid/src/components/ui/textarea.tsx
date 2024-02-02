import { ark, type HTMLArkProps } from '@ark-ui/solid'
import { splitProps } from 'solid-js'
import { tv, type VariantProps } from 'tailwind-variants'

export interface TextareaProps extends TextareaVariantProps, HTMLArkProps<'textarea'> {}

export const Textarea = (props: TextareaProps) => {
  const [variantProps, textareaProps] = splitProps(props, ['class', 'size'])
  // @ts-expect-error https://github.com/nextui-org/tailwind-variants/issues/145
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
