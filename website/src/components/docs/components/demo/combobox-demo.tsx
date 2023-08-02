import { ComboboxLabel, Portal } from '@ark-ui/react'
import { useState } from 'react'
import { BiExpandVertical } from 'react-icons/bi'
import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxOption,
  ComboboxPositioner,
  ComboboxTrigger,
  type ComboboxProps,
} from '~/components/combobox'
import { IconButton } from '~/components/icon-button'
import { Input } from '~/components/input'
import { Label } from '~/components/label'

const data = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Vue', value: 'vue' },
]

export const ComboboxDemo = () => {
  const [options, setOptions] = useState(data)

  const handleInputChange: ComboboxProps['onInputChange'] = (e) => {
    const filtered = data.filter((item) => item.label.toLowerCase().includes(e.value.toLowerCase()))
    setOptions(filtered.length > 0 ? filtered : data)
  }

  return (
    <Combobox onInputChange={handleInputChange}>
      <ComboboxLabel asChild>
        <Label>JS Frameworks</Label>
      </ComboboxLabel>
      <ComboboxControl>
        <ComboboxInput asChild>
          <Input />
        </ComboboxInput>
        <ComboboxTrigger asChild>
          <IconButton variant="link" icon={<BiExpandVertical />} aria-label="open" size="sm" />
        </ComboboxTrigger>
      </ComboboxControl>
      <Portal>
        <ComboboxPositioner>
          <ComboboxContent>
            {options.map((item) => (
              <ComboboxOption key={item.value} {...item}>
                {item.label}
              </ComboboxOption>
            ))}
          </ComboboxContent>
        </ComboboxPositioner>
      </Portal>
    </Combobox>
  )
}
