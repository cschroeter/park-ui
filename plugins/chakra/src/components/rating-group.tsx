import { RatingGroup as ArkRatingGroup } from '@ark-ui/react/rating-group'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('RatingGroup')

const RatingGroup = withProvider(chakra(ArkRatingGroup.Root), 'root')
const RatingGroupControl = withContext(chakra(ArkRatingGroup.Control), 'control')
const RatingGroupItem = withContext(chakra(ArkRatingGroup.Item), 'item')
const RatingGroupLabel = withContext(chakra(ArkRatingGroup.Label), 'label')

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

export interface RatingGroupProps extends HTMLChakraProps<typeof RatingGroup> {}
export interface RatingGroupControlProps extends HTMLChakraProps<typeof RatingGroupControl> {}
export interface RatingGroupItemProps extends HTMLChakraProps<typeof RatingGroupItem> {}
export interface RatingGroupLabelProps extends HTMLChakraProps<typeof RatingGroupLabel> {}
