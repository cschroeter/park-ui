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
      {options.map((option) => (
        <SegmentGroup.Item key={option.id} value={option.id} disabled={option.id === 'premium'}>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
      <SegmentGroup.Indicator />
    </SegmentGroup.Root>
  )
}
