import type { Meta } from 'storybook-solidjs'
import * as SegmentGroup from '~/components/ui/segment-group'

const meta: Meta = {
  title: 'Components/Segment Group',
}

export default meta

export const Base = () => {
  const options = [
    { id: 'overview', label: 'Overview' },
    { id: 'customers', label: 'Customers' },
    { id: 'premium', label: 'Premium', disabled: true },
    { id: 'settings', label: 'Settings' },
  ]
  return (
    <SegmentGroup.Root value="customers">
      {options.map((option) => (
        <SegmentGroup.Item value={option.id} disabled={option.disabled}>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
        </SegmentGroup.Item>
      ))}
      <SegmentGroup.Indicator />
    </SegmentGroup.Root>
  )
}
