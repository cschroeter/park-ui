import { createListCollection } from '@ark-ui/solid/collection'
import { For } from 'solid-js'
import { Select } from '@/components/ui'

const collection = createListCollection({
  items: ['React', 'Vue', 'Svelte', 'Angular'],
})

export const App = () => {
  return (
    <Select.Root collection={collection} maxW="xs">
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a framework" />
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          <For each={collection.items}>
            {(item) => (
              <Select.Item item={item}>
                <Select.ItemText>{item}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            )}
          </For>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}
