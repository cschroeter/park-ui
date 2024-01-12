import { SegmentGroup as ArkSegmentGroup } from '@ark-ui/react/segment-group'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('SegmentGroup')

const SegmentGroup = withProvider(chakra(ArkSegmentGroup.Root), 'root')
const SegmentGroupIndicator = withContext(chakra(ArkSegmentGroup.Indicator), 'indicator')
const SegmentGroupItem = withContext(chakra(ArkSegmentGroup.Item), 'item')
const SegmentGroupItemControl = withContext(chakra(ArkSegmentGroup.ItemControl), 'itemControl')
const SegmentGroupItemText = withContext(chakra(ArkSegmentGroup.ItemText), 'itemText')
const SegmentGroupLabel = withContext(chakra(ArkSegmentGroup.Label), 'label')

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

export interface SegmentGroupProps extends HTMLChakraProps<typeof SegmentGroup> {}
export interface SegmentGroupIndicatorProps extends HTMLChakraProps<typeof SegmentGroupIndicator> {}
export interface SegmentGroupItemProps extends HTMLChakraProps<typeof SegmentGroupItem> {}
export interface SegmentGroupItemControlProps
  extends HTMLChakraProps<typeof SegmentGroupItemControl> {}
export interface SegmentGroupItemTextProps extends HTMLChakraProps<typeof SegmentGroupItemText> {}
export interface SegmentGroupLabelProps extends HTMLChakraProps<typeof SegmentGroupLabel> {}
