import * as Ark from '@ark-ui/react/dialog'
import { styled } from 'styled-system/jsx'
import { dialog, type DialogVariantProps } from 'styled-system/recipes'

export type DialogProps = DialogVariantProps & Ark.DialogProps
export const Dialog = styled(Ark.Dialog)

export type DialogTriggerProps = DialogVariantProps & Ark.DialogTriggerProps
export const DialogTrigger = styled(Ark.DialogTrigger)

export type DialogBackdropProps = DialogVariantProps & Ark.DialogBackdropProps
export const DialogBackdrop = styled(Ark.DialogBackdrop, dialog)

export type DialogContainerProps = DialogVariantProps & Ark.DialogContainerProps
export const DialogContainer = styled(Ark.DialogContainer, dialog)

export type DialogContentProps = DialogVariantProps & Ark.DialogContentProps
export const DialogContent = styled(Ark.DialogContent)

export type DialogCloseTriggerProps = DialogVariantProps & Ark.DialogCloseTriggerProps
export const DialogCloseTrigger = styled(Ark.DialogCloseTrigger)

export type DialogTitleProps = DialogVariantProps & Ark.DialogTitleProps
export const DialogTitle = styled(Ark.DialogTitle)

export type DialogDescriptionProps = DialogVariantProps & Ark.DialogDescriptionProps
export const DialogDescription = styled(Ark.DialogDescription)
