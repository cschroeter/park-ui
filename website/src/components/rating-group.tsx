'use client'
import {
  RatingGroup as ArkRatingGroup,
  type RatingGroupProps as ArkRatingGroupProps,
} from '@ark-ui/react/rating-group'
import { styled } from 'styled-system/jsx'
import { ratingGroup, type RatingGroupVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/rating-group'

export type RatingGroupProps = RatingGroupVariantProps & ArkRatingGroupProps
export const RatingGroup = styled(ArkRatingGroup, ratingGroup)
