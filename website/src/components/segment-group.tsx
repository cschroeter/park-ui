import {
  SegmentGroup as ArkSegmentGroup,
  type SegmentGroupProps as ArkSegmentGroupProps,
} from '@ark-ui/react/segment-group'
import { segmentGroup, type SegmentGroupVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/segment-group'

export type SegmentGroupProps = SegmentGroupVariantProps & ArkSegmentGroupProps

export const SegmentGroup = (props: SegmentGroupProps) => {
  const { size, ...rest } = props
  return <ArkSegmentGroup className={segmentGroup({ size })} {...rest} />
}
