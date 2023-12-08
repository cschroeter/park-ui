import { Dialog as ArkDialog } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'dialog',
  slots: {
    trigger: 'dialog__trigger',
    backdrop: 'dialog__backdrop',
    positioner: 'dialog__positioner',
    content: 'dialog__content',
    title: 'dialog__title',
    description: 'dialog__description',
    closeTrigger: 'dialog__closeTrigger',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

export const DialogRoot = withProvider(ArkDialog.Root)
export const DialogBackdrop = withContext(ArkDialog.Backdrop, 'backdrop')
export const DialogCloseTrigger = withContext(ArkDialog.CloseTrigger, 'closeTrigger')
export const DialogContent = withContext(ArkDialog.Content, 'content')
export const DialogDescription = withContext(ArkDialog.Description, 'description')
export const DialogPositioner = withContext(ArkDialog.Positioner, 'positioner')
export const DialogTitle = withContext(ArkDialog.Title, 'title')
export const DialogTrigger = withContext(ArkDialog.Trigger, 'trigger')

export const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Backdrop: DialogBackdrop,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Description: DialogDescription,
  Positioner: DialogPositioner,
  Title: DialogTitle,
  Trigger: DialogTrigger,
})
