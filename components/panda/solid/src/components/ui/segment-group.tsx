import { SegmentGroup } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { segmentGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

const Root = withProvider(styled(SegmentGroup.Root), 'root')
const Indicator = withContext(styled(SegmentGroup.Indicator), 'indicator')
const Item = withContext(styled(SegmentGroup.Item), 'item')
const ItemControl = withContext(styled(SegmentGroup.ItemControl), 'itemControl')
const ItemText = withContext(styled(SegmentGroup.ItemText), 'itemText')
const Label = withContext(styled(SegmentGroup.Label), 'label')

export { Indicator, Item, ItemControl, ItemText, Label, Root }
