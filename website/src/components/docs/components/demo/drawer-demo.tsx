import { Portal } from '@ark-ui/react'
import { Button } from '~/components/button'
import {
  Dialog,
  DialogBackdrop,
  DialogContainer,
  DialogContent,
  DialogTrigger,
} from '~/components/drawer'

export const DrawerDemo = () => {
  return (
    <Dialog>
      {({ close }) => (
        <>
          <DialogTrigger asChild>
            <Button variant="secondary">Open Drawer</Button>
          </DialogTrigger>
          <Portal>
            <DialogBackdrop />
            <DialogContainer>
              <DialogContent>
                <h1>Drawer Content</h1>
                <Button variant="secondary" onClick={close}>
                  Close Drawer
                </Button>
              </DialogContent>
            </DialogContainer>
          </Portal>
        </>
      )}
    </Dialog>
  )
}
