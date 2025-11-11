import { createSignal, For } from 'solid-js'

import { RadioGroup } from '@/components/ui'

export const App = () => {
  const [value, setValue] = createSignal<string | null>('react')
  return (
    <RadioGroup.Root value={value()} onValueChange={(e) => setValue(e.value)}>
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
  )
}

const items = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
]
