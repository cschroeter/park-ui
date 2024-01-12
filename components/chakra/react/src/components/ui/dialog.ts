import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('Dialog')

const Dialog = withProvider(ArkDialog.Root)
const DialogBackdrop = withContext(chakra(ArkDialog.Backdrop), 'backdrop')
const DialogCloseTrigger = withContext(chakra(ArkDialog.CloseTrigger), 'closeTrigger')
const DialogContent = withContext(chakra(ArkDialog.Content), 'content')
const DialogDescription = withContext(chakra(ArkDialog.Description), 'description')
const DialogPositioner = withContext(chakra(ArkDialog.Positioner), 'positioner')
const DialogTitle = withContext(chakra(ArkDialog.Title), 'title')
const DialogTrigger = withContext(chakra(ArkDialog.Trigger), 'trigger')

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

export interface DialogProps extends HTMLChakraProps<typeof Dialog> {}
export interface DialogBackdropProps extends HTMLChakraProps<typeof DialogBackdrop> {}
export interface DialogCloseTriggerProps extends HTMLChakraProps<typeof DialogCloseTrigger> {}
export interface DialogContentProps extends HTMLChakraProps<typeof DialogContent> {}
export interface DialogDescriptionProps extends HTMLChakraProps<typeof DialogDescription> {}
export interface DialogPositionerProps extends HTMLChakraProps<typeof DialogPositioner> {}
export interface DialogTitleProps extends HTMLChakraProps<typeof DialogTitle> {}
export interface DialogTriggerProps extends HTMLChakraProps<typeof DialogTrigger> {}
