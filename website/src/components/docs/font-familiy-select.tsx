'use client'
import { createListCollection } from '@ark-ui/react/collection'
import { Select } from '@/components/ui'
import { type Font, fonts } from '~/app/fonts'

interface Props {
  font: Font
  onValueChange: (font: Font) => void
}

export const FontFamilySelect = (props: Props) => {
  const { font, onValueChange } = props

  return (
    <Select.Root
      collection={collection}
      value={[font.value]}
      onValueChange={(e) => onValueChange(e.items[0])}
      size="sm"
    >
      <Select.Label>Font Family</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a font" />
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {collection.items.map((font, id) => (
            <Select.Item key={id} item={font}>
              <Select.ItemText>{font.label}</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}

const collection = createListCollection<Font>({
  items: fonts,
})
