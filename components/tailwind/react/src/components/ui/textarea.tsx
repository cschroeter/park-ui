import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface TextareaProps extends TextareaVariantProps, HTMLArkProps<'textarea'> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { size, className, ...rest } = props
  return <ark.textarea className={textarea({ size, className })} ref={ref} {...rest} />
})

Textarea.displayName = 'Textarea'

type TextareaVariantProps = VariantProps<typeof textarea>

const textarea = tv(
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
