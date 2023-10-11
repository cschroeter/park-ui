import type { Meta } from '@storybook/react'
import {
  Segment,
  SegmentControl,
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentLabel,
  type SegmentGroupProps,
} from './components/ui'

const meta: Meta<SegmentGroupProps> = {
  title: 'SegmentGroup',
  component: SegmentGroup,
}

export default meta
export const Basic = (props: SegmentGroupProps) => {
  const options = [
    { id: 'overview', label: 'Overview' },
    { id: 'customers', label: 'Customers' },
    { id: 'premium', label: 'Premium', disabled: true },
    { id: 'settings', label: 'Settings' },
  ]
  return (
    <SegmentGroup defaultValue="customers" orientation="horizontal">
      {options.map((option) => (
        <Segment key={option.id} value={option.id} disabled={option.disabled}>
          <SegmentControl />
          <SegmentLabel>{option.label}</SegmentLabel>
        </Segment>
      ))}
      <SegmentGroupIndicator />
    </SegmentGroup>
  )
}
