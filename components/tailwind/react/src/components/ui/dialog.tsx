import { Dialog } from '@ark-ui/react/dialog'
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

const Root = withProvider(Dialog.Root)
const Backdrop = withContext(Dialog.Backdrop, 'backdrop')
const CloseTrigger = withContext(Dialog.CloseTrigger, 'closeTrigger')
const Content = withContext(Dialog.Content, 'content')
const Description = withContext(Dialog.Description, 'description')
const Positioner = withContext(Dialog.Positioner, 'positioner')
const Title = withContext(Dialog.Title, 'title')
const Trigger = withContext(Dialog.Trigger, 'trigger')

export { Backdrop, CloseTrigger, Content, Description, Positioner, Root, Title, Trigger }
