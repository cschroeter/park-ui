import { createSignal, For } from 'solid-js'

import { Button, Menu } from '@/components/ui'

export const App = () => {
  const items = [
    { label: 'Name (A-Z)', value: 'name' },
    { label: 'Date Created', value: 'date' },
    { label: 'Size', value: 'size' },
  ]

  const [value, setValue] = createSignal('name')
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild={(triggerProps) => (
          <Button variant="surface" {...triggerProps()}>
            Sort By
            <Menu.Indicator />
          </Button>
        )}
      />
      <Menu.Positioner>
        <Menu.Content>
          <Menu.RadioItemGroup value={value()} onValueChange={(e) => setValue(e.value)}>
            <For each={items}>
              {(item) => (
                <Menu.RadioItem value={item.value}>
                  {item.label}
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
              )}
            </For>
          </Menu.RadioItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
