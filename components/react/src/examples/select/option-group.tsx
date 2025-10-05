'use client'
import { createListCollection } from '@ark-ui/react/collection'
import { Portal } from '@ark-ui/react/portal'
import { Select } from '@/components/ui'

export const App = () => {
  return (
    <Select.Root collection={collection} maxW="sm">
      <Select.HiddenSelect />
      <Select.Label>Favorite Movie</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Pick a movie" />
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.group().map(([category, items]) => (
              <Select.ItemGroup key={category}>
                <Select.ItemGroupLabel>{category}</Select.ItemGroupLabel>
                {items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {item.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const collection = createListCollection({
  items: [
    { label: 'Naruto', value: 'naruto', category: 'Anime' },
    { label: 'One Piece', value: 'one-piece', category: 'Anime' },
    { label: 'Dragon Ball', value: 'dragon-ball', category: 'Anime' },
    {
      label: 'The Shawshank Redemption',
      value: 'the-shawshank-redemption',
      category: 'Movies',
    },
    { label: 'The Godfather', value: 'the-godfather', category: 'Movies' },
    { label: 'The Dark Knight', value: 'the-dark-knight', category: 'Movies' },
  ],
  groupBy: (item) => item.category,
})
