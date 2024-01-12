import { Dialog as ArkDialog } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { dialog } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(dialog)

export const DialogRoot = withProvider(ArkDialog.Root)
export const DialogBackdrop = withContext(styled(ArkDialog.Backdrop), 'backdrop')
export const DialogCloseTrigger = withContext(styled(ArkDialog.CloseTrigger), 'closeTrigger')
export const DialogContent = withContext(styled(ArkDialog.Content), 'content')
export const DialogDescription = withContext(styled(ArkDialog.Description), 'description')
export const DialogPositioner = withContext(styled(ArkDialog.Positioner), 'positioner')
export const DialogTitle = withContext(styled(ArkDialog.Title), 'title')
export const DialogTrigger = withContext(styled(ArkDialog.Trigger), 'trigger')

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

export type DialogProps = typeof DialogRoot
export type DialogBackdropProps = typeof DialogBackdrop
export type DialogCloseTriggerProps = typeof DialogCloseTrigger
export type DialogContentProps = typeof DialogContent
export type DialogDescriptionProps = typeof DialogDescription
export type DialogPositionerProps = typeof DialogPositioner
export type DialogTitleProps = typeof DialogTitle
export type DialogTriggerProps = typeof DialogTrigger
