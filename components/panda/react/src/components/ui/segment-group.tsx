import { SegmentGroup as ArkSegmentGroup } from '@ark-ui/react/segment-group'
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
