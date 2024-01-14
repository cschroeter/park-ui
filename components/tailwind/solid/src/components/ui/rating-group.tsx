import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'ratingGroup',
  defaultVariants: { size: 'md' },
  slots: {
    root: 'ratingGroup__root',
    label: 'ratingGroup__label',
    item: 'ratingGroup__item',
    control: 'ratingGroup__control',
  },
  variants: {
    size: {
      sm: {
        root: 'ratingGroup__root--size_sm',
        label: 'ratingGroup__label--size_sm',
        item: 'ratingGroup__item--size_sm',
        control: 'ratingGroup__control--size_sm',
      },
      md: {
        root: 'ratingGroup__root--size_md',
        label: 'ratingGroup__label--size_md',
        item: 'ratingGroup__item--size_md',
        control: 'ratingGroup__control--size_md',
      },
      lg: {
        root: 'ratingGroup__root--size_lg',
        label: 'ratingGroup__label--size_lg',
        item: 'ratingGroup__item--size_lg',
        control: 'ratingGroup__control--size_lg',
      },
    },
  },
})
