import { For } from 'solid-js'
import { Wrap } from 'styled-system/jsx'
import { Button, Menu } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg'] as const

  return (
    <Wrap gap="4">
      <For each={sizes}>
        {(size) => (
          <Menu.Root size={size}>
            <Menu.Trigger
              asChild={(triggerProps) => (
                <Button variant="outline" size={size} {...triggerProps()}>
                  File
                  <Menu.Indicator />
                </Button>
              )}
            />
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-file">New File</Menu.Item>
                <Menu.Item value="open-file">Open File</Menu.Item>
                <Menu.Separator />
                <Menu.Item value="save">Save</Menu.Item>
                <Menu.Item value="save-as">Save As</Menu.Item>
                <Menu.Item value="recent-files">Recent Files</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
        )}
      </For>
    </Wrap>
  )
}
