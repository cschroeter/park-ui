import { createListCollection } from '@ark-ui/solid/collection'
import { For } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Stack } from 'styled-system/jsx'
import { Select } from '@/components/ui'

export const App = () => {
  const sizes = ['sm', 'md', 'lg'] as const
  return (
    <Stack gap="4">
      <For each={sizes}>
        {(size) => (
          <Select.Root size={size} collection={frameworks}>
            <Select.HiddenSelect />
            <Select.Label>Label</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select framework" />
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Trigger>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  <For each={frameworks.items}>
                    {(framework) => (
                      <Select.Item item={framework}>
                        {framework.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    )}
                  </For>
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        )}
      </For>
    </Stack>
  )
}

const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
})
