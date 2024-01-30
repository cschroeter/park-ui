import { SegmentGroup as ArkSegmentGroup } from '@ark-ui/react/segment-group'
import type { ComponentProps } from 'react'
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

export const SegmentGroup = {
  Root: SegmentGroupRoot,
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  ItemControl: SegmentGroupItemControl,
  ItemText: SegmentGroupItemText,
  Label: SegmentGroupLabel,
}

export interface SegmentGroupRootProps extends ComponentProps<typeof SegmentGroupRoot> {}
export interface SegmentGroupIndicatorProps extends ComponentProps<typeof SegmentGroupIndicator> {}
export interface SegmentGroupItemProps extends ComponentProps<typeof SegmentGroupItem> {}
export interface SegmentGroupItemControlProps
  extends ComponentProps<typeof SegmentGroupItemControl> {}
export interface SegmentGroupItemTextProps extends ComponentProps<typeof SegmentGroupItemText> {}
export interface SegmentGroupLabelProps extends ComponentProps<typeof SegmentGroupLabel> {}
