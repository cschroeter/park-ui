import { Button, Menu } from '@/components/ui'

export const App = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          File
          <Menu.Indicator />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="new-file">New File</Menu.Item>
          <Menu.Item value="new-folder">New Folder</Menu.Item>
          <Menu.Item value="open">Open</Menu.Item>
          <Menu.Item value="save">Save</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
