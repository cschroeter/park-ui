import { Portal } from '@ark-ui/react'
import { BiCheck, BiExpandVertical } from 'react-icons/bi'
import {
  Select,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

export const SelectDemo = () => {
  const items = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Svelte', value: 'svelte', disabled: true },
    { label: 'Vue', value: 'vue' },
  ]
  return (
    <Select items={items} positioning={{ sameWidth: true }} width="2xs">
      <SelectLabel>Framework</SelectLabel>
      <SelectControl>
        <SelectTrigger>
          <SelectValue placeholder="Select a Framework" />
          <BiExpandVertical />
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectPositioner>
          <SelectContent>
            <SelectItemGroup id="framework">
              <SelectItemGroupLabel htmlFor="framework">Frameworks</SelectItemGroupLabel>
              {items.map((item) => (
                <SelectItem key={item.value} item={item}>
                  <SelectItemText>{item.label}</SelectItemText>
                  <SelectItemIndicator>
                    <BiCheck />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectItemGroup>
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </Select>
  )
}
