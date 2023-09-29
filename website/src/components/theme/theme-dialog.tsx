import { XIcon } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogTrigger,
} from '../ui/dialog'
import { IconButton } from '../ui/icon-button'
import { ThemeGenerator } from './theme-generator'

export const ThemeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size={{ base: 'xl', md: '2xl' }}
          display={{ base: 'inline-flex', lg: 'none' }}
        >
          Customize Theme
        </Button>
      </DialogTrigger>
      <DialogBackdrop />
      <DialogContainer>
        <DialogContent>
          <ThemeGenerator hideContextMenu />
          <DialogCloseTrigger asChild position="absolute" top="2" right="2">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <XIcon />
            </IconButton>
          </DialogCloseTrigger>
        </DialogContent>
      </DialogContainer>
    </Dialog>
  )
}
