import { useListCollection } from '@ark-ui/solid/collection'
import { useFilter } from '@ark-ui/solid/locale'
import { For } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Combobox } from '@/components/ui'

export const App = () => {
  const foo = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: foo().contains,
  })

  return (
    <Combobox.Root collection={collection()} onInputValueChange={(e) => filter(e.inputValue)}>
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
            <For each={collection().items}>
              {(item) => (
                <Combobox.Item item={item}>
                  {item.label}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              )}
            </For>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
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
