import { SegmentGroup as ArkSegmentGroup } from '@ark-ui/react/segment-group'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { segmentGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

const Root = withProvider(styled(ArkSegmentGroup.Root), 'root')
const Indicator = withContext(styled(ArkSegmentGroup.Indicator), 'indicator')
const Item = withContext(styled(ArkSegmentGroup.Item), 'item')
const ItemControl = withContext(styled(ArkSegmentGroup.ItemControl), 'itemControl')
const ItemText = withContext(styled(ArkSegmentGroup.ItemText), 'itemText')
const Label = withContext(styled(ArkSegmentGroup.Label), 'label')

export { Indicator, Item, ItemControl, ItemText, Label, Root }

export interface SegmentGroupRootProps extends ComponentProps<typeof Root> {}
export interface SegmentGroupIndicatorProps extends ComponentProps<typeof Indicator> {}
export interface SegmentGroupItemProps extends ComponentProps<typeof Item> {}
export interface SegmentGroupItemControlProps extends ComponentProps<typeof ItemControl> {}
export interface SegmentGroupItemTextProps extends ComponentProps<typeof ItemText> {}
export interface SegmentGroupLabelProps extends ComponentProps<typeof Label> {}
