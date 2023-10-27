import { Portal } from '@ark-ui/react'
import { XIcon } from 'lucide-react'
import { Button } from '../button/snippet'
import { IconButton } from '../icon-button/snippet'
import { Drawer } from './snippet'

export const Demo = () => {
  return (
    <Drawer.Root placement="right">
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
              <Drawer.CloseTrigger asChild className="absolute top-3 right-4">
                <IconButton variant="ghost" aria-label="Close">
                  <XIcon />
                </IconButton>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>{/* Content */}</Drawer.Body>
            <Drawer.Footer className="gap-3">
              <Drawer.CloseTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Drawer.CloseTrigger>
              <Button>Primary</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
