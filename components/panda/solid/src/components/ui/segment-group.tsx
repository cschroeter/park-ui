import { SegmentGroup as ArkSegmentGroup } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { segmentGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export const SegmentGroupRoot = withProvider(styled(ArkSegmentGroup.Root), 'root')
export const SegmentGroupIndicator = withContext(styled(ArkSegmentGroup.Indicator), 'indicator')
export const SegmentGroupItem = withContext(styled(ArkSegmentGroup.Item), 'item')
export const SegmentGroupItemControl = withContext(
  styled(ArkSegmentGroup.ItemControl),
  'itemControl',
)
export const SegmentGroupItemText = withContext(styled(ArkSegmentGroup.ItemText), 'itemText')
export const SegmentGroupLabel = withContext(styled(ArkSegmentGroup.Label), 'label')

export const SegmentGroup = Object.assign(SegmentGroupRoot, {
  Root: SegmentGroupRoot,
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  ItemControl: SegmentGroupItemControl,
  ItemText: SegmentGroupItemText,
  Label: SegmentGroupLabel,
})

export type SegmentGroupProps = typeof SegmentGroupRoot
export type SegmentGroupIndicatorProps = typeof SegmentGroupIndicator
export type SegmentGroupItemProps = typeof SegmentGroupItem
export type SegmentGroupItemControlProps = typeof SegmentGroupItemControl
export type SegmentGroupItemTextProps = typeof SegmentGroupItemText
export type SegmentGroupLabelProps = typeof SegmentGroupLabel
