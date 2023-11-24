import { SegmentGroup, type SegmentGroupProps } from '~/components/ui'

export const Demo = (props: SegmentGroupProps) => {
  const options = [
    { id: 'overview', label: 'Overview' },
    { id: 'customers', label: 'Customers' },
    { id: 'premium', label: 'Premium', disabled: true },
    { id: 'settings', label: 'Settings' },
  ]
  return (
    <SegmentGroup.Root defaultValue="customers" {...props}>
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
