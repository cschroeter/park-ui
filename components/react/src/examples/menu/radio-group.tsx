'use client'
import { useState } from 'react'
import { Button, Menu } from '@/components/ui'

export const App = () => {
  const items = [
    { label: 'Name (A-Z)', value: 'name' },
    { label: 'Date Created', value: 'date' },
    { label: 'Size', value: 'size' },
  ]

  const [value, setValue] = useState('name')
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface">
          Sort By
          <Menu.Indicator />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.RadioItemGroup value={value} onValueChange={(e) => setValue(e.value)}>
            {items.map((item) => (
              <Menu.RadioItem key={item.value} value={item.value}>
                {item.label}
                <Menu.ItemIndicator />
              </Menu.RadioItem>
            ))}
          </Menu.RadioItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
