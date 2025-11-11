import { For } from 'solid-js'
import { HStack, Stack } from 'styled-system/jsx'
import { RadioCardGroup } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'surface', 'subtle', 'outline'] as const
  return (
    <Stack gap="4">
      <For each={variants}>
        {(variant) => (
          <RadioCardGroup.Root variant={variant} defaultValue="react">
            <HStack>
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
        )}
      </For>
    </Stack>
  )
}

const items = [
  { value: 'react', title: 'React' },
  { value: 'solid', title: 'Solid' },
  { value: 'vue', title: 'Vue' },
]
