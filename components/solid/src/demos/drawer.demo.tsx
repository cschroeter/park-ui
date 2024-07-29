import { XIcon } from 'lucide-solid'
import { Button } from '~/components/ui/button'
import { Drawer } from '~/components/ui/drawer'
import { IconButton } from '~/components/ui/icon-button'

export const Demo = (props: Drawer.RootProps) => {
  return (
    <Drawer.Root {...props}>
      <Drawer.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>Open Drawer</Button>}
      />
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Description>Description</Drawer.Description>
            <Drawer.CloseTrigger
              asChild={(closeProps) => (
                <IconButton
                  {...closeProps()}
                  variant="ghost"
                  style={{ position: 'absolute', top: '3', right: '4' }}
                >
                  <XIcon />
                </IconButton>
              )}
            />
          </Drawer.Header>
          <Drawer.Body>{/* Content */}</Drawer.Body>
          <Drawer.Footer gap="3">
            <Drawer.CloseTrigger
              asChild={(closeProps) => (
                <Button {...closeProps()} variant="outline">
                  Cancel
                </Button>
              )}
            />
            <Button>Primary</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
