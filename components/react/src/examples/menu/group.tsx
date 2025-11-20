import { Portal } from '@ark-ui/react/portal'
import { Button, Menu } from '@/components/ui'

export const App = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">View</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Sort by</Menu.ItemGroupLabel>
              <Menu.Item value="name">Name</Menu.Item>
              <Menu.Item value="date-modified">Date Modified</Menu.Item>
              <Menu.Item value="size">Size</Menu.Item>
              <Menu.Item value="type">Type</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>View Options</Menu.ItemGroupLabel>
              <Menu.Item value="details">Details</Menu.Item>
              <Menu.Item value="icons">Large Icons</Menu.Item>
              <Menu.Item value="list">List</Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
