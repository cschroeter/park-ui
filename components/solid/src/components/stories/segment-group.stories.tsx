import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { SegmentGroup } from '~/components/ui/segment-group'

const meta: Meta = {
  title: 'Components/Segment Group',
}

export default meta

export const Base = () => {
  const options = [
    { value: 'overview', label: 'Overview' },
    { value: 'customers', label: 'Customers' },
    { value: 'premium', label: 'Premium', disabled: true },
    { value: 'settings', label: 'Settings' },
  ]
  return (
    <SegmentGroup.Root value="customers">
      <Index each={options}>
        {(option) => (
          <SegmentGroup.Item value={option().value} disabled={option().disabled}>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemText>{option().label}</SegmentGroup.ItemText>
          </SegmentGroup.Item>
        )}
      </Index>
      <SegmentGroup.Indicator />
    </SegmentGroup.Root>
  )
}
