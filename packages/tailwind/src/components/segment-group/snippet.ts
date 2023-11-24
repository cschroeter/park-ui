import * as Ark from '@ark-ui/react/segment-group'
import { createStyleContext } from '~/lib/create-style-context'
import { segmentGroupStyles } from './recipe'
export * from '@ark-ui/react/segment-group'

export type SegmentGroupProps = React.ComponentProps<typeof SegmentGroup>

const { withProvider, withContext } = createStyleContext(segmentGroupStyles)

const SegmentGroupRoot = withProvider(Ark.SegmentGroup.Root, 'root')
export const SegmentGroupLabel = withContext(Ark.SegmentGroup.Label, 'label')
export const SegmentGroupIndicator = withContext(Ark.SegmentGroup.Indicator, 'indicator')
export const SegmentGroupItem = withContext(Ark.SegmentGroup.Item, 'item')
export const SegmentGroupItemText = withContext(Ark.SegmentGroup.ItemText, 'itemText')
export const SegmentGroupItemControl = withContext(Ark.SegmentGroup.ItemControl, 'itemControl')

export const SegmentGroup = Object.assign(SegmentGroupRoot, {
  Root: SegmentGroupRoot,
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  ItemControl: SegmentGroupItemControl,
  ItemText: SegmentGroupItemText,
  Label: SegmentGroupLabel,
})
