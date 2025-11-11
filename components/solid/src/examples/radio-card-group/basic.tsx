import { For } from 'solid-js'
import { HStack } from 'styled-system/jsx'
import { RadioCardGroup } from '@/components/ui'

export const App = () => {
  return (
    <RadioCardGroup.Root defaultValue="react">
      <RadioCardGroup.Label>Select framework</RadioCardGroup.Label>
      <HStack alignItems="stretch">
        <For each={items}>
          {(item) => (
            <RadioCardGroup.Item value={item.value}>
              <RadioCardGroup.ItemHiddenInput />
              <RadioCardGroup.ItemText>{item.title}</RadioCardGroup.ItemText>
              <RadioCardGroup.ItemControl />
            </RadioCardGroup.Item>
          )}
        </For>
      </HStack>
    </RadioCardGroup.Root>
  )
}

const items = [
  { value: 'react', title: 'React' },
  { value: 'solid', title: 'Solid' },
  { value: 'vue', title: 'Vue' },
]
