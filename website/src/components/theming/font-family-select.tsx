'use client'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { type Font, fonts } from '~/app/fonts'
import { Select, createListCollection } from '~/components/ui/select'

interface Props {
  font: Font
  onValueChange: (font: Font) => void
}

export const FontFamilySelect = (props: Props) => {
  const { font, onValueChange } = props
  const collection = createListCollection({ items: Object.keys(fonts) })

  return (
    <Select.Root
      collection={collection}
      value={[font]}
      onValueChange={(e) => onValueChange(e.value[0] as Font)}
      positioning={{ sameWidth: true }}
      size="sm"
    >
      <Select.Label>Font Family</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText />
          <ChevronsUpDownIcon />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {collection.items.map((font, id) => (
            <Select.Item key={id} item={font}>
              <Select.ItemText>{font}</Select.ItemText>
              <Select.ItemIndicator>
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}
