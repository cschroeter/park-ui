import { tv } from 'tailwind-variants'

export const toggleGroupStyles = tv({
  base: 'toggleGroup',
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  slots: {
    root: 'toggleGroup__root',
    item: 'toggleGroup__item',
  },
  variants: {
    variant: {
      outline: {
        root: 'toggleGroup__root--variant_outline',
        item: 'toggleGroup__item--variant_outline',
      },
      ghost: {
        root: 'toggleGroup__root--variant_ghost',
        item: 'toggleGroup__item--variant_ghost',
      },
    },
    size: {
      sm: {
        root: 'toggleGroup__root--size_sm',
        item: 'toggleGroup__item--size_sm',
      },
      md: {
        root: 'toggleGroup__root--size_md',
        item: 'toggleGroup__item--size_md',
      },
      lg: {
        root: 'toggleGroup__root--size_lg',
        item: 'toggleGroup__item--size_lg',
      },
    },
  },
})
