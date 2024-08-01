import { CheckIcon, ChevronsUpDownIcon } from 'lucide-solid'
import { For, createSignal } from 'solid-js'
import { Combobox } from '~/components/ui/combobox'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'

const data = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Vue', value: 'vue' },
]

export const Demo = (props: Combobox.RootProps) => {
  const [items, setItems] = createSignal(data)

  const handleChange = (e: Combobox.InputValueChangeDetails) => {
    const filtered = data.filter((item) =>
      item.label.toLowerCase().includes(e.inputValue.toLowerCase()),
    )
    setItems(filtered.length > 0 ? filtered : data)
  }

  return (
    <Combobox.Root width="2xs" onInputValueChange={handleChange} {...props} items={items()}>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input
          placeholder="Select a Framework"
          asChild={(inputProps) => <Input {...inputProps()} />}
        />
        <Combobox.Trigger
          asChild={(triggerProps) => (
            <IconButton variant="link" aria-label="open" size="xs" {...triggerProps()}>
              <ChevronsUpDownIcon />
            </IconButton>
          )}
        />
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
