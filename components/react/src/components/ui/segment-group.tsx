'use client'
import { SegmentGroup } from '@ark-ui/react/segment-group'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { segmentGroup } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(SegmentGroup.Root, 'root')
export const RootProvider = withProvider(SegmentGroup.RootProvider, 'root')
export const Indicator = withContext(SegmentGroup.Indicator, 'indicator')
export const Item = withContext(SegmentGroup.Item, 'item')
export const ItemControl = withContext(SegmentGroup.ItemControl, 'itemControl')
export const ItemHiddenInput = SegmentGroup.ItemHiddenInput
export const ItemText = withContext(SegmentGroup.ItemText, 'itemText')
export const Label = withContext(SegmentGroup.Label, 'label')

export { SegmentGroupContext as Context } from '@ark-ui/react/segment-group'
