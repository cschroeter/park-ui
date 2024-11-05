import type { Meta } from '@storybook/react'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'
import { Combobox, createListCollection } from '~/components/ui/combobox'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'

const meta: Meta = {
  title: 'Components/Combobox',
}

export default meta

const data = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Vue', value: 'vue' },
]

export const Base = () => {
  const [items, setItems] = useState(data)
  const collection = createListCollection({
    items: data,
  })

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    setItems(
      items.filter((item) => item.value.toLowerCase().includes(details.inputValue.toLowerCase())),
    )
  }
  return (
    <Combobox.Root width="2xs" onInputValueChange={handleInputChange} collection={collection}>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Select a Framework" asChild>
          <Input />
        </Combobox.Input>
        <Combobox.Trigger asChild>
          <IconButton variant="link" aria-label="open" size="xs">
            <ChevronsUpDownIcon />
          </IconButton>
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          <Combobox.ItemGroup>
            <Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
            {collection.items.map((item) => (
              <Combobox.Item key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator>
                  <CheckIcon />
                </Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  )
}
