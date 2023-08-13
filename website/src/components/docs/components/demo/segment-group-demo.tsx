import {
  Segment,
  SegmentControl,
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentLabel,
  type SegmentGroupProps,
} from '~/components/ui/segment-group'

export const SegmentGroupDemo = (props: SegmentGroupProps) => {
  const options = [
    { id: 'react', label: 'React' },
    { id: 'solid', label: 'Solid' },
    { id: 'vue', label: 'Vue' },
  ]
  return (
    <SegmentGroup defaultValue="react" {...props}>
      {options.map((option, id) => (
        <Segment key={id} value={option.id}>
          <SegmentControl />
          <SegmentLabel>{option.label}</SegmentLabel>
        </Segment>
      ))}
      <SegmentGroupIndicator />
    </SegmentGroup>
  )
}
