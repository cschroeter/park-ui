import { tv } from 'tailwind-variants'

export const segmentGroupStyles = tv({
  base: 'segmentGroup',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'segmentGroup__root',
    label: 'segmentGroup__label',
    item: 'segmentGroup__item',
    itemText: 'segmentGroup__itemText',
    itemControl: 'segmentGroup__itemControl',
    indicator: 'segmentGroup__indicator',
  },
  variants: {
    size: {
      sm: {
        root: 'segmentGroup__root--size_sm',
        label: 'segmentGroup__label--size_sm',
        item: 'segmentGroup__item--size_sm',
        itemText: 'segmentGroup__itemText--size_sm',
        itemControl: 'segmentGroup__itemControl--size_sm',
        indicator: 'segmentGroup__indicator--size_sm',
      },
      md: {
        root: 'segmentGroup__root--size_md',
        label: 'segmentGroup__label--size_md',
        item: 'segmentGroup__item--size_md',
        itemText: 'segmentGroup__itemText--size_md',
        itemControl: 'segmentGroup__itemControl--size_md',
        indicator: 'segmentGroup__indicator--size_md',
      },
    },
  },
})
