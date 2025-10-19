import { Portal } from '@ark-ui/react/portal'
import { Center } from 'styled-system/jsx'
import { Menu } from '@/components/ui'

export const App = () => {
  return (
    <Menu.Root>
      <Menu.ContextTrigger width="full">
        <Center
          height="40"
          userSelect="none"
          borderWidth="2px"
          borderStyle="dashed"
          rounded="lg"
          padding="4"
        >
          Right click in explorer
        </Center>
      </Menu.ContextTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-file">New File</Menu.Item>
            <Menu.Item value="new-folder">New Folder</Menu.Item>
            <Menu.Item value="copy-path">Copy Path</Menu.Item>
            <Menu.Item value="reveal-explorer">Reveal in File Explorer</Menu.Item>
            <Menu.Item value="properties">Properties</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
