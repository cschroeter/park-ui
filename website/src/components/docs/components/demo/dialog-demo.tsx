import { Portal } from '@ark-ui/react'
import { FiX } from 'react-icons/fi'
import { Box, Stack } from 'styled-system/jsx'
import { Button } from '~/components/button'
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '~/components/dialog'
import { IconButton } from '~/components/icon-button'

export const DialogDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Open dialog</Button>
      </DialogTrigger>
      <Portal>
        <DialogBackdrop />
        <DialogContainer>
          <DialogContent>
            <Stack gap="8" p="6">
              <Stack gap="1">
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>Dialog Description</DialogDescription>
              </Stack>
              <Stack gap="3" direction="row" width="full">
                <DialogCloseTrigger asChild>
                  <Button variant="secondary" size="md" width="full">
                    Cancel
                  </Button>
                </DialogCloseTrigger>
                <Button variant="primary" size="md" width="full">
                  Confirm
                </Button>
              </Stack>
            </Stack>
            <Box position="absolute" top="2" right="2">
              <DialogCloseTrigger asChild>
                <IconButton icon={<FiX />} aria-label="Close Dialog" variant="tertiary" size="sm" />
              </DialogCloseTrigger>
            </Box>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  )
}
