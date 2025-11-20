import { Portal } from 'solid-js/web'
import { Button, CloseButton, Drawer } from '@/components/ui'

export const App = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>Open Drawer</Button>}
      />
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger asChild={(triggerProps) => <CloseButton {...triggerProps()} />} />
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
