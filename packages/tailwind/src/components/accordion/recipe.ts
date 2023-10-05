import { tv } from 'tailwind-variants'

export const accordionStyles = tv({
  base: 'accordion',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'accordion__root',
    item: 'accordion__item',
    trigger: 'accordion__trigger',
    content: 'accordion__content',
  },
  variants: {
    size: {
      md: {
        root: 'accordion__root--size_md',
        item: 'accordion__item--size_md',
        trigger: 'accordion__trigger--size_md',
        content: 'accordion__content--size_md',
      },
    },
  },
})
