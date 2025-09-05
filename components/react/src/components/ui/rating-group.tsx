'use client'
import { RatingGroup } from '@ark-ui/react/rating-group'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { ratingGroup } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(ratingGroup)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(RatingGroup.Root, 'root')
export const RootProvider = withProvider(RatingGroup.RootProvider, 'root')
export const Control = withContext(RatingGroup.Control, 'control')
export const Item = withContext(RatingGroup.Item, 'item')
export const Label = withContext(RatingGroup.Label, 'label')
export const HiddenInput = RatingGroup.HiddenInput

export {
  RatingGroupContext as Context,
  RatingGroupItemContext as ItemContext,
} from '@ark-ui/react/rating-group'
