import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import type { ComponentProps } from 'react'
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

export const Dialog = {
  Root: DialogRoot,
  Backdrop: DialogBackdrop,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Description: DialogDescription,
  Positioner: DialogPositioner,
  Title: DialogTitle,
  Trigger: DialogTrigger,
}

export interface DialogRootProps extends ComponentProps<typeof DialogRoot> {}
export interface DialogBackdropProps extends ComponentProps<typeof DialogBackdrop> {}
export interface DialogCloseTriggerProps extends ComponentProps<typeof DialogCloseTrigger> {}
export interface DialogContentProps extends ComponentProps<typeof DialogContent> {}
export interface DialogDescriptionProps extends ComponentProps<typeof DialogDescription> {}
export interface DialogPositionerProps extends ComponentProps<typeof DialogPositioner> {}
export interface DialogTitleProps extends ComponentProps<typeof DialogTitle> {}
export interface DialogTriggerProps extends ComponentProps<typeof DialogTrigger> {}
