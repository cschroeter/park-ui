'use client'
import { useListCollection } from '@ark-ui/react/collection'
import { useFilter } from '@ark-ui/react/locale'
import { Portal } from '@ark-ui/react/portal'
import { Stack } from 'styled-system/jsx'
import { Combobox } from '@/components/ui'

export const App = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  })

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Stack gap="4">
      {sizes.map((size) => (
        <Combobox.Root
          collection={collection}
          onInputValueChange={(e) => filter(e.inputValue)}
          key={size}
          size={size}
        >
          <Combobox.Label>Framework</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input placeholder="Type to search" />
            <Combobox.IndicatorGroup>
              <Combobox.ClearTrigger />
              <Combobox.Trigger />
            </Combobox.IndicatorGroup>
          </Combobox.Control>
          <Portal>
            <Combobox.Positioner>
              <Combobox.Content>
                <Combobox.Empty>No items found</Combobox.Empty>
                {collection.items.map((item) => (
                  <Combobox.Item item={item} key={item.value}>
                    {item.label}
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
              </Combobox.Content>
            </Combobox.Positioner>
          </Portal>
        </Combobox.Root>
      ))}
    </Stack>
  )
}

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Preact', value: 'preact' },
  { label: 'Qwik', value: 'qwik' },
  { label: 'Lit', value: 'lit' },
  { label: 'Alpine.js', value: 'alpinejs' },
  { label: 'Ember', value: 'ember' },
  { label: 'Next.js', value: 'nextjs' },
]
