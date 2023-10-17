import { Portal } from '@ark-ui/react'
import { XIcon } from 'lucide-react'
import { Button } from '../button/snippet'
import { IconButton } from '../icon-button/snippet'
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  type DialogProps,
} from './snippet'

export const Demo = (props: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <Portal>
        <DialogBackdrop />
        <DialogContainer>
          <DialogContent>
            <div className="flex flex-col gap-8 p-6">
              <div className="flex flex-col gap-1">
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>Dialog Description</DialogDescription>
              </div>
              <div className="flex flex-row gap-3 w-full">
                <DialogCloseTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </DialogCloseTrigger>
                <Button className="w-full">Confirm</Button>
              </div>
            </div>
            <DialogCloseTrigger asChild className="absolute top-2 right-2">
              <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
                <XIcon />
              </IconButton>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  )
}
