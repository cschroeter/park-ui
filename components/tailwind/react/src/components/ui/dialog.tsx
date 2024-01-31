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

const Root = withProvider(ArkDialog.Root)
const Backdrop = withContext(ArkDialog.Backdrop, 'backdrop')
const CloseTrigger = withContext(ArkDialog.CloseTrigger, 'closeTrigger')
const Content = withContext(ArkDialog.Content, 'content')
const Description = withContext(ArkDialog.Description, 'description')
const Positioner = withContext(ArkDialog.Positioner, 'positioner')
const Title = withContext(ArkDialog.Title, 'title')
const Trigger = withContext(ArkDialog.Trigger, 'trigger')

export { Backdrop, CloseTrigger, Content, Description, Positioner, Root, Title, Trigger }
