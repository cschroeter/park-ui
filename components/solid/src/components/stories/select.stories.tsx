import { CheckIcon, ChevronsUpDownIcon } from 'lucide-solid'
import { For } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Select, createListCollection } from '~/components/ui/select'

const meta: Meta = {
  title: 'Components/Select',
}

export default meta

export const Base = () => {
  const collection = createListCollection({
    items: [
      { label: 'React', value: 'react' },
      { label: 'Solid', value: 'solid' },
      { label: 'Svelte', value: 'svelte', disabled: true },
      { label: 'Vue', value: 'vue' },
    ],
  })

  return (
    <Select.Root positioning={{ sameWidth: true }} width="2xs" collection={collection}>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <ChevronsUpDownIcon />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          <Select.ItemGroup>
            <Select.ItemGroupLabel>Framework</Select.ItemGroupLabel>
            <For each={collection.items}>
              {(item) => (
                <Select.Item item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              )}
            </For>
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}
