import { For } from 'solid-js'
import { SegmentGroup } from '~/components/ui/segment-group'

export const Demo = (props: SegmentGroup.RootProps) => {
  const options = [
    { id: 'overview', label: 'Overview' },
    { id: 'customers', label: 'Customers' },
    { id: 'premium', label: 'Premium' },
    { id: 'settings', label: 'Settings' },
  ]

  return (
    <SegmentGroup.Root defaultValue="customers" {...props}>
      <For each={options}>
        {(option) => (
          <SegmentGroup.Item value={option.id} disabled={option.id === 'premium'}>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        )}
      </For>
      <SegmentGroup.Indicator />
    </SegmentGroup.Root>
  )
}
