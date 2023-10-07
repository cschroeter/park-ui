import { tv } from 'tailwind-variants'

export const ratingGroupStyles = tv({
  base: 'ratingGroup',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'ratingGroup__root',
    label: 'ratingGroup__label',
    rating: 'ratingGroup__rating',
    control: 'ratingGroup__control',
  },
  variants: {
    size: {
      sm: {
        root: 'ratingGroup__root--size_sm',
        label: 'ratingGroup__label--size_sm',
        rating: 'ratingGroup__rating--size_sm',
        control: 'ratingGroup__control--size_sm',
      },
      md: {
        root: 'ratingGroup__root--size_md',
        label: 'ratingGroup__label--size_md',
        rating: 'ratingGroup__rating--size_md',
        control: 'ratingGroup__control--size_md',
      },
      lg: {
        root: 'ratingGroup__root--size_lg',
        label: 'ratingGroup__label--size_lg',
        rating: 'ratingGroup__rating--size_lg',
        control: 'ratingGroup__control--size_lg',
      },
    },
  },
})
