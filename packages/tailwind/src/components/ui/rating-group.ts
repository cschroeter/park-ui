import { RatingGroup as ArkRatingGroup } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

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
const { withProvider, withContext } = createStyleContext(styles)

export const RatingGroupRoot = withProvider(ArkRatingGroup.Root, 'root')
export const RatingGroupControl = withContext(ArkRatingGroup.Control, 'control')
export const RatingGroupItem = withContext(ArkRatingGroup.Item, 'item')
export const RatingGroupLabel = withContext(ArkRatingGroup.Label, 'label')

export const RatingGroup = Object.assign(RatingGroupRoot, {
  Root: RatingGroupRoot,
  Control: RatingGroupControl,
  Item: RatingGroupItem,
  Label: RatingGroupLabel,
})
