import { SegmentGroup } from '@/components/ui'

export const App = () => {
  const items = ['React', 'Solid', 'Svelte', 'Vue']

  return (
    <SegmentGroup.Root defaultValue="React" fitted>
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={items} />
    </SegmentGroup.Root>
  )
}
