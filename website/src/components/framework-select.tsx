'use client'
import { useListCollection } from '@ark-ui/react/collection'
import { Select } from '@/components/ui'
import { type Framework, frameworks } from '~/lib/frameworks'

interface Props {
  framework: Framework
  onValueChange: (value: Framework) => void
}

export const FrameworkSelect = ({ framework, onValueChange }: Props) => {
  const { collection } = useListCollection<Framework>({
    initialItems: frameworks,
  })

  return (
    <Select.Root
      collection={collection}
      size="sm"
      defaultValue={[framework]}
      onValueChange={(e) => {
        onValueChange(e.items[0])
        window.location.reload()
      }}
    >
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText textTransform="capitalize" placeholder="Select a framework" />
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item key={item} item={item}>
              <Select.ItemText textTransform="capitalize">{item}</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}
