import { tv } from 'tailwind-variants'

export const textareaStyles = tv({
  base: 'textarea',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'textarea--size_sm',
      md: 'textarea--size_md',
      lg: 'textarea--size_lg',
      xl: 'textarea--size_xl',
    },
  },
})
