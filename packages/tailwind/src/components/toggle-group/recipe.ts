import { tv } from 'tailwind-variants'

export const toggleGroupStyles = tv({
  base: 'toggleGroup',
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  slots: {
    root: 'toggleGroup__root',
    toggle: 'toggleGroup__toggle',
  },
  variants: {
    variant: {
      outline: {
        root: 'toggleGroup__root--variant_outline',
        toggle: 'toggleGroup__toggle--variant_outline',
      },
      ghost: {
        root: 'toggleGroup__root--variant_ghost',
        toggle: 'toggleGroup__toggle--variant_ghost',
      },
    },
    size: {
      sm: {
        root: 'toggleGroup__root--size_sm',
        toggle: 'toggleGroup__toggle--size_sm',
      },
      md: {
        root: 'toggleGroup__root--size_md',
        toggle: 'toggleGroup__toggle--size_md',
      },
      lg: {
        root: 'toggleGroup__root--size_lg',
        toggle: 'toggleGroup__toggle--size_lg',
      },
    },
  },
})
