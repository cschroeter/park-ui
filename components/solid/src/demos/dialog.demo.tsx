import { XIcon } from 'lucide-solid'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { IconButton } from '~/components/ui/icon-button'

export const Demo = (props: Dialog.RootProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>Open Dialog</Button>}
      />
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>Dialog Description</Dialog.Description>
            </Stack>
            <Stack gap="3" direction="row" width="full">
              <Dialog.CloseTrigger
                asChild={(closeTriggerProps) => (
                  <Button {...closeTriggerProps()} variant="outline" width="full">
                    Cancel
                  </Button>
                )}
              />
              <Button width="full">Confirm</Button>
            </Stack>
          </Stack>
          <Dialog.CloseTrigger
            asChild={(closeTriggerProps) => (
              <IconButton
                {...closeTriggerProps()}
                aria-label="Close Dialog"
                variant="ghost"
                size="sm"
                position="absolute"
                top="2"
                right="2"
              >
                <XIcon />
              </IconButton>
            )}
          />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
