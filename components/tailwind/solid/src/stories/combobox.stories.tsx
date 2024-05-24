import { CheckIcon, ChevronsUpDownIcon } from 'lucide-solid'
import { For, createSignal } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Combobox, IconButton, Input } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Combobox',
}

export default meta

export const Base = () => {
  const data = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Svelte', value: 'svelte', disabled: true },
    { label: 'Vue', value: 'vue' },
  ]
  const [items, setItems] = createSignal(data)

  const handleChange = (e: Combobox.InputValueChangeDetails) => {
    const filtered = data.filter((item) =>
      item.label.toLowerCase().includes(e.inputValue.toLowerCase()),
    )
    setItems(filtered.length > 0 ? filtered : data)
  }

  return (
    <Combobox.Root class="w-2xs" onInputValueChange={handleChange} items={items()}>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input
          placeholder="Select a Framework"
          asChild={(props) => <Input {...props()} />}
        />
        <Combobox.Trigger
          asChild={(props) => <IconButton {...props()} variant="link" size="xs" />}
          aria-label="open"
        >
          <ChevronsUpDownIcon />
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          <Combobox.ItemGroup>
            <Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
            <For each={items()}>
              {(item) => (
                <Combobox.Item item={item}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  <Combobox.ItemIndicator>
                    <CheckIcon />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              )}
            </For>
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  )
}
