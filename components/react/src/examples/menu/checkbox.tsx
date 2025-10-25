'use client'
import { useCheckboxGroup } from '@ark-ui/react/checkbox'
import { Button, Menu } from '@/components/ui'

export const App = () => {
  const items = [
    { title: 'Enable Notifications', value: 'notifications' },
    { title: 'Dark Mode', value: 'dark-mode' },
    { title: 'Show Tooltips', value: 'tooltips' },
  ]

  const group = useCheckboxGroup({ defaultValue: ['notifications'] })

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface">
          Settings
          <Menu.Indicator />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {items.map(({ title, value }) => (
            <Menu.CheckboxItem
              key={value}
              value={value}
              checked={group.isChecked(value)}
              onCheckedChange={() => group.toggleValue(value)}
            >
              {title}
              <Menu.ItemIndicator />
            </Menu.CheckboxItem>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
