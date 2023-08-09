import * as Ark from '@ark-ui/react/rating-group'
import { styled } from 'styled-system/jsx'
import { ratingGroup, type RatingGroupVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/rating-group'

const { withProvider, withContext } = createStyleContext(ratingGroup)

export type RatingGroupProps = Ark.RatingGroupProps & RatingGroupVariantProps

const RatingGroupRoot = withProvider(styled(Ark.RatingGroup.Root), 'root')
const RatingGroupControl = withContext(styled(Ark.RatingGroup.Control), 'control')
const RatingGroupLabel = withContext(styled(Ark.RatingGroup.Label), 'label')
const Rating = withContext(styled(Ark.RatingGroup.Rating), 'rating')

const RatingGroup = Object.assign(RatingGroupRoot, {
  Root: RatingGroupRoot,
  Control: RatingGroupControl,
  Label: RatingGroupLabel,
  Rating: Rating,
})

export { Rating, RatingGroup, RatingGroupControl, RatingGroupLabel }
