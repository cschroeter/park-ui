import { Portal } from '@ark-ui/react'
import { XIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { IconButton } from '~/components/ui/icon-button'

export const Demo = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open dialog</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <div className="flex flex-col p-6 gap-8">
              <div className="gap-1">
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Description>Dialog Description</Dialog.Description>
              </div>
              <div className="flex gap-3 flex-row w-full">
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </Dialog.CloseTrigger>
                <Button className="w-full">Confirm</Button>
              </div>
            </div>
            <Dialog.CloseTrigger asChild className="absolute top-2 right-2">
              <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
                <XIcon />
              </IconButton>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
