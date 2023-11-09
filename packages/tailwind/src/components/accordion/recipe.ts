import { tv } from 'tailwind-variants'

export const accordionStyles = tv({
  base: 'accordion',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'accordion__root',
    item: 'accordion__item',
    itemTrigger: 'accordion__itemTrigger',
    itemContent: 'accordion__itemContent',
    itemIndicator: 'accordion__itemIndicator',
  },
  variants: {
    size: {
      md: {
        root: 'accordion__root--size_md',
        item: 'accordion__item--size_md',
        itemTrigger: 'accordion__itemTrigger--size_md',
        itemContent: 'accordion__itemContent--size_md',
        itemIndicator: 'accordion__itemIndicator--size_md',
      },
    },
  },
})
