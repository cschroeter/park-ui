import { RatingGroup as ArkRatingGroup } from '@ark-ui/react/rating-group'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { ratingGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(ratingGroup)

const RatingGroup = withProvider(styled(ArkRatingGroup.Root), 'root')
const RatingGroupControl = withContext(styled(ArkRatingGroup.Control), 'control')
const RatingGroupItem = withContext(styled(ArkRatingGroup.Item), 'item')
const RatingGroupLabel = withContext(styled(ArkRatingGroup.Label), 'label')

const Root = RatingGroup
const Control = RatingGroupControl
const Item = RatingGroupItem
const Label = RatingGroupLabel

export {
  Control,
  Item,
  Label,
  RatingGroup,
  RatingGroupControl,
  RatingGroupItem,
  RatingGroupLabel,
  Root,
}

export interface RatingGroupProps extends HTMLStyledProps<typeof RatingGroup> {}
export interface RatingGroupControlProps extends HTMLStyledProps<typeof RatingGroupControl> {}
export interface RatingGroupItemProps extends HTMLStyledProps<typeof RatingGroupItem> {}
export interface RatingGroupLabelProps extends HTMLStyledProps<typeof RatingGroupLabel> {}
