import { SegmentGroup as ArkSegmentGroup } from '@ark-ui/react/segment-group'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { segmentGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

const SegmentGroup = withProvider(styled(ArkSegmentGroup.Root), 'root')
const SegmentGroupIndicator = withContext(styled(ArkSegmentGroup.Indicator), 'indicator')
const SegmentGroupItem = withContext(styled(ArkSegmentGroup.Item), 'item')
const SegmentGroupItemControl = withContext(styled(ArkSegmentGroup.ItemControl), 'itemControl')
const SegmentGroupItemText = withContext(styled(ArkSegmentGroup.ItemText), 'itemText')
const SegmentGroupLabel = withContext(styled(ArkSegmentGroup.Label), 'label')

const Root = SegmentGroup
const Indicator = SegmentGroupIndicator
const Item = SegmentGroupItem
const ItemControl = SegmentGroupItemControl
const ItemText = SegmentGroupItemText
const Label = SegmentGroupLabel

export {
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  Root,
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemControl,
  SegmentGroupItemText,
  SegmentGroupLabel,
}

export interface SegmentGroupProps extends ComponentProps<typeof SegmentGroup> {}
export interface SegmentGroupIndicatorProps extends ComponentProps<typeof SegmentGroupIndicator> {}
export interface SegmentGroupItemProps extends ComponentProps<typeof SegmentGroupItem> {}
export interface SegmentGroupItemControlProps
  extends ComponentProps<typeof SegmentGroupItemControl> {}
export interface SegmentGroupItemTextProps extends ComponentProps<typeof SegmentGroupItemText> {}
export interface SegmentGroupLabelProps extends ComponentProps<typeof SegmentGroupLabel> {}
