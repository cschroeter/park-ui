import * as Ark from '@ark-ui/solid/rating-group'
import { styled } from 'styled-system/jsx'
import { ratingGroup, type RatingGroupVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(ratingGroup)

export * from '@ark-ui/solid/rating-group'
export type RatingGroupProps = Ark.RatingGroupProps & RatingGroupVariantProps

const RatingGroupRoot = withProvider(styled(Ark.RatingGroup), 'root')
export const RatingGroupControl = withContext(styled(Ark.RatingGroupControl), 'control')
export const RatingGroupLabel = withContext(styled(Ark.RatingGroupLabel), 'label')
export const Rating = withContext(styled(Ark.Rating), 'rating')

export const RatingGroup = Object.assign(RatingGroupRoot, {
  Root: RatingGroupRoot,
  Control: RatingGroupControl,
  Label: RatingGroupLabel,
  Rating: Rating,
})
