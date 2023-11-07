import { Portal } from '@ark-ui/react'
import { Button } from '../button/snippet'
import { Drawer } from './snippet'

export const Demo = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Title</Drawer.Title>
              <Drawer.Description>Description</Drawer.Description>
            </Drawer.Header>
            <Drawer.Body>Content</Drawer.Body>
            <Drawer.Footer className="grid gap-3">
              <Button variant="outline">Secondary</Button>
              <Button>Primary</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
