import * as Ark from '@ark-ui/react/dialog'
import { styled } from 'styled-system/jsx'
import { dialog, type DialogVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/dialog'

const { withProvider, withContext } = createStyleContext(dialog)

export type DialogProps = Ark.DialogProps & DialogVariantProps

const DialogRoot = withProvider(styled(Ark.Dialog.Root), 'root')
const DialogBackdrop = withContext(styled(Ark.Dialog.Backdrop), 'backdrop')
const DialogCloseTrigger = withContext(styled(Ark.Dialog.CloseTrigger), 'closeTrigger')
const DialogContainer = withContext(styled(Ark.Dialog.Container), 'container')
const DialogContent = withContext(styled(Ark.Dialog.Content), 'content')
const DialogDescription = withContext(styled(Ark.Dialog.Description), 'description')
const DialogTitle = withContext(styled(Ark.Dialog.Title), 'title')
const DialogTrigger = withContext(styled(Ark.Dialog.Trigger), 'trigger')

const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Backdrop: DialogBackdrop,
  CloseTrigger: DialogCloseTrigger,
  Container: DialogContainer,
  Content: DialogContent,
  Description: DialogDescription,
  Title: DialogTitle,
  Trigger: DialogTrigger,
})

export {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
}
