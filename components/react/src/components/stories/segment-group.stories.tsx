import type { Meta } from '@storybook/react'
import { SegmentGroup } from '~/components/ui/segment-group'

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
    <SegmentGroup.Root defaultValue="customers">
      {options.map((option) => (
        <SegmentGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
        </SegmentGroup.Item>
      ))}
      <SegmentGroup.Indicator />
    </SegmentGroup.Root>
  )
}
