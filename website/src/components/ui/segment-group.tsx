import * as Ark from '@ark-ui/react/segment-group'
import { styled } from 'styled-system/jsx'
import { segmentGroup, type SegmentGroupVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/segment-group'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export type SegmentGroupProps = Ark.SegmentGroupProps & SegmentGroupVariantProps

const SegmentGroupRoot = withProvider(styled(Ark.SegmentGroup.Root), 'root')
const SegmentGroupLabel = withContext(styled(Ark.SegmentGroup.Label), 'label')
const Segment = withContext(styled(Ark.SegmentGroup.Segment), 'radio')
const SegmentIndicator = withContext(styled(Ark.SegmentGroup.SegmentIndicator), 'indicator')
const SegmentInput = withContext(styled(Ark.SegmentGroup.SegmentInput), 'radioInput')
const SegmentLabel = withContext(styled(Ark.SegmentGroup.SegmentLabel), 'radioLabel')
const SegmentControl = withContext(styled(Ark.SegmentGroup.SegmentControl), 'radioControl')

const SegmentGroup = Object.assign(SegmentGroupRoot, {
  Root: SegmentGroupRoot,
  Label: SegmentGroupLabel,
  Segment: Segment,
  SegmentIndicator: SegmentIndicator,
  SegmentInput: SegmentInput,
  SegmentLabel: SegmentLabel,
  SegmentControl: SegmentControl,
})

export {
  Segment,
  SegmentControl,
  SegmentGroup,
  SegmentGroupLabel,
  SegmentIndicator,
  SegmentInput,
  SegmentLabel,
}
