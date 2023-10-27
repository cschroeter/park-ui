import * as Ark from '@ark-ui/react/rating-group'
import { createStyleContext } from '~/lib/create-style-context'
import { ratingGroupStyles } from './recipe'
export * from '@ark-ui/react/rating-group'

export type RatingGroupProps = React.ComponentProps<typeof RatingGroup>

const { withProvider, withContext } = createStyleContext(ratingGroupStyles)

const RatingGroupRoot = withProvider(Ark.RatingGroup.Root, 'root')
export const RatingGroupControl = withContext(Ark.RatingGroup.Control, 'control')
export const RatingGroupLabel = withContext(Ark.RatingGroup.Label, 'label')
export const RatingGroupItem = withContext(Ark.RatingGroup.Item, 'item')

export const RatingGroup = Object.assign(RatingGroupRoot, {
  Root: RatingGroupRoot,
  Control: RatingGroupControl,
  Label: RatingGroupLabel,
  Item: RatingGroupItem,
})
