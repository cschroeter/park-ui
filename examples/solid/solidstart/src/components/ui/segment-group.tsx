import * as Ark from '@ark-ui/solid/segment-group'
import { styled } from 'styled-system/jsx'
import { segmentGroup, type SegmentGroupVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export * from '@ark-ui/solid/segment-group'
export type SegmentGroupProps = Ark.SegmentGroupProps & SegmentGroupVariantProps

const SegmentGroupRoot = withProvider(styled(Ark.SegmentGroup), 'root')
export const SegmentGroupLabel = withContext(styled(Ark.SegmentGroupLabel), 'label')
export const SegmentGroupIndicator = withContext(styled(Ark.SegmentIndicator), 'indicator')
export const Segment = withContext(styled(Ark.Segment), 'radio')
export const SegmentLabel = withContext(styled(Ark.SegmentLabel), 'radioLabel')
export const SegmentControl = withContext(styled(Ark.SegmentControl), 'radioControl')

export const SegmentGroup = Object.assign(SegmentGroupRoot, {
  Root: SegmentGroupRoot,
  Label: SegmentGroupLabel,
  Indicator: SegmentGroupIndicator,
  Segment: Segment,
  SegmentLabel: SegmentLabel,
  SegmentControl: SegmentControl,
})
