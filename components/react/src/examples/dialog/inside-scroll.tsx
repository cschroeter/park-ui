import { Portal } from '@ark-ui/react/portal'
import { loremIpsum } from 'lorem-ipsum'
import { Button, CloseButton, Dialog } from '@/components/ui'

export const App = () => {
  return (
    <Dialog.Root scrollBehavior="inside">
      <Dialog.Trigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body
              color="fg.muted"
              dangerouslySetInnerHTML={{
                __html: loremIpsum({ count: 10, format: 'html', units: 'paragraphs' }),
              }}
            />
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button>Save</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
