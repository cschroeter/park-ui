import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { dialog } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(dialog)

const Dialog = withProvider(ArkDialog.Root)
const DialogBackdrop = withContext(styled(ArkDialog.Backdrop), 'backdrop')
const DialogCloseTrigger = withContext(styled(ArkDialog.CloseTrigger), 'closeTrigger')
const DialogContent = withContext(styled(ArkDialog.Content), 'content')
const DialogDescription = withContext(styled(ArkDialog.Description), 'description')
const DialogPositioner = withContext(styled(ArkDialog.Positioner), 'positioner')
const DialogTitle = withContext(styled(ArkDialog.Title), 'title')
const DialogTrigger = withContext(styled(ArkDialog.Trigger), 'trigger')

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

export interface DialogProps extends ComponentProps<typeof Dialog> {}
export interface DialogBackdropProps extends ComponentProps<typeof DialogBackdrop> {}
export interface DialogCloseTriggerProps extends ComponentProps<typeof DialogCloseTrigger> {}
export interface DialogContentProps extends ComponentProps<typeof DialogContent> {}
export interface DialogDescriptionProps extends ComponentProps<typeof DialogDescription> {}
export interface DialogPositionerProps extends ComponentProps<typeof DialogPositioner> {}
export interface DialogTitleProps extends ComponentProps<typeof DialogTitle> {}
export interface DialogTriggerProps extends ComponentProps<typeof DialogTrigger> {}
