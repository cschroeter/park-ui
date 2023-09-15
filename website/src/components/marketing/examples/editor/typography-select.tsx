import { Portal } from '@ark-ui/react'
import { BiCheck, BiExpandVertical } from 'react-icons/bi'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

export const TypographySelect = () => {
  const items = ['Pargraph', 'Heading 1', 'Heading 2', 'Heading 3']
  return (
    <Select
      items={items}
      defaultValue={['Pargraph']}
      positioning={{ sameWidth: true }}
      size="sm"
      width="32"
      variant="ghost"
    >
      <SelectTrigger>
        <SelectValue />
        <BiExpandVertical />
      </SelectTrigger>
      <Portal>
        <SelectPositioner>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item} item={item}>
                <SelectItemText>{item}</SelectItemText>
                <SelectItemIndicator>
                  <BiCheck />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </Select>
  )
}
