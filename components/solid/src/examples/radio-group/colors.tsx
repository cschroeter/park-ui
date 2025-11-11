import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { RadioGroup } from '@/components/ui'

export const App = () => {
  const colors = ['blue', 'green', 'amber', 'red'] as const
  return (
    <Stack gap="4">
      <For each={colors}>
        {(color) => (
          <RadioGroup.Root defaultValue="react" colorPalette={color} flexDir="row" gap="6">
            <For each={items}>
              {(item) => (
                <RadioGroup.Item value={item.value}>
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemControl />
                  <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                </RadioGroup.Item>
              )}
            </For>
          </RadioGroup.Root>
        )}
      </For>
    </Stack>
  )
}

const items = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
]
