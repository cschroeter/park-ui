import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
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

const Dialog = withProvider(ArkDialog.Root)
const DialogBackdrop = withContext(ArkDialog.Backdrop, 'backdrop')
const DialogCloseTrigger = withContext(ArkDialog.CloseTrigger, 'closeTrigger')
const DialogContent = withContext(ArkDialog.Content, 'content')
const DialogDescription = withContext(ArkDialog.Description, 'description')
const DialogPositioner = withContext(ArkDialog.Positioner, 'positioner')
const DialogTitle = withContext(ArkDialog.Title, 'title')
const DialogTrigger = withContext(ArkDialog.Trigger, 'trigger')

const Root = Dialog
const Backdrop = DialogBackdrop
const CloseTrigger = DialogCloseTrigger
const Content = DialogContent
const Description = DialogDescription
const Positioner = DialogPositioner
const Title = DialogTitle
const Trigger = DialogTrigger

export {
  Backdrop,
  CloseTrigger,
  Content,
  Description,
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogPositioner,
  DialogTitle,
  DialogTrigger,
  Positioner,
  Root,
  Title,
  Trigger,
}
