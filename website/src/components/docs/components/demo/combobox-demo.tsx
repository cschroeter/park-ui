import { Portal, type CollectionItem } from '@ark-ui/react'
import { useState } from 'react'
import { BiCheck, BiExpandVertical } from 'react-icons/bi'
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxPositioner,
  ComboboxTrigger,
  type ComboboxProps,
} from '~/components/ui/combobox'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'

const data = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Vue', value: 'vue' },
]

export const ComboboxDemo = (props: ComboboxProps<CollectionItem>) => {
  const [items, setItems] = useState(data)

  const handleChange = (e: any) => {
    const filtered = data.filter((item) => item.label.toLowerCase().includes(e.value.toLowerCase()))
    setItems(filtered.length > 0 ? filtered : data)
  }

  return (
    <Combobox width="2xs" onInputChange={handleChange} {...props} items={items}>
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl>
        <ComboboxInput placeholder="Select a Framework" asChild>
          <Input />
        </ComboboxInput>
        <ComboboxTrigger asChild>
          <IconButton variant="link" aria-label="open" size="xs">
            <BiExpandVertical />
          </IconButton>
        </ComboboxTrigger>
      </ComboboxControl>
      <Portal>
        <ComboboxPositioner>
          <ComboboxContent>
            <ComboboxItemGroup id="framework">
              <ComboboxItemGroupLabel htmlFor="framework">Frameworks</ComboboxItemGroupLabel>
              {items.map((item) => (
                <ComboboxItem key={item.value} item={item}>
                  <ComboboxItemText>{item.label}</ComboboxItemText>
                  <ComboboxItemIndicator>
                    <BiCheck />
                  </ComboboxItemIndicator>
                </ComboboxItem>
              ))}
            </ComboboxItemGroup>
          </ComboboxContent>
        </ComboboxPositioner>
      </Portal>
    </Combobox>
  )
}
