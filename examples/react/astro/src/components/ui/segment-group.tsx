import * as Ark from '@ark-ui/react/segment-group'
import { styled } from 'styled-system/jsx'
import { segmentGroup, type SegmentGroupVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export * from '@ark-ui/react/segment-group'
export type SegmentGroupProps = Ark.SegmentGroupProps & SegmentGroupVariantProps

const SegmentGroupRoot = withProvider(styled(Ark.SegmentGroup.Root), 'root')
export const SegmentGroupLabel = withContext(styled(Ark.SegmentGroup.Label), 'label')
export const Segment = withContext(styled(Ark.SegmentGroup.Segment), 'radio')
export const SegmentIndicator = withContext(styled(Ark.SegmentGroup.SegmentIndicator), 'indicator')
export const SegmentInput = withContext(styled(Ark.SegmentGroup.SegmentInput), 'radioInput')
export const SegmentLabel = withContext(styled(Ark.SegmentGroup.SegmentLabel), 'radioLabel')
export const SegmentControl = withContext(styled(Ark.SegmentGroup.SegmentControl), 'radioControl')

export const SegmentGroup = Object.assign(SegmentGroupRoot, {
  Root: SegmentGroupRoot,
  Label: SegmentGroupLabel,
  Segment: Segment,
  SegmentIndicator: SegmentIndicator,
  SegmentInput: SegmentInput,
  SegmentLabel: SegmentLabel,
  SegmentControl: SegmentControl,
})
