import { RatingGroup as ArkRatingGroup } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { ratingGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(ratingGroup)

export const RatingGroupRoot = withProvider(styled(ArkRatingGroup.Root), 'root')
export const RatingGroupControl = withContext(styled(ArkRatingGroup.Control), 'control')
export const RatingGroupItem = withContext(styled(ArkRatingGroup.Item), 'item')
export const RatingGroupLabel = withContext(styled(ArkRatingGroup.Label), 'label')

export const RatingGroup = Object.assign(RatingGroupRoot, {
  Root: RatingGroupRoot,
  Control: RatingGroupControl,
  Item: RatingGroupItem,
  Label: RatingGroupLabel,
})

export type RatingGroupProps = typeof RatingGroupRoot
export type RatingGroupControlProps = typeof RatingGroupControl
export type RatingGroupItemProps = typeof RatingGroupItem
export type RatingGroupLabelProps = typeof RatingGroupLabel
