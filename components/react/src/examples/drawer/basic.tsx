import { Portal } from '@ark-ui/react/portal'
import { Button, CloseButton, Drawer } from '@/components/ui'

export const App = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger asChild>
              <CloseButton />
            </Drawer.CloseTrigger>
            <Drawer.Header>
              <Drawer.Title>Title</Drawer.Title>
              <Drawer.Description>Description</Drawer.Description>
            </Drawer.Header>
            <Drawer.Body>{/* Content */}</Drawer.Body>
            <Drawer.Footer gap="3">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
