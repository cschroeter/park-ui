import * as Ark from '@ark-ui/react/dialog'
import { styled } from 'styled-system/jsx'
import { drawer, type DrawerVariantProps } from 'styled-system/recipes'

export type DrawerProps = Ark.DialogProps
export const Drawer = styled(Ark.Dialog)

export type DrawerTriggerProps = Ark.DialogTriggerProps
export const DrawerTrigger = styled(Ark.DialogTrigger)

export type DrawerBackdropProps = DrawerVariantProps & Ark.DialogBackdropProps
export const DrawerBackdrop = styled(Ark.DialogBackdrop, drawer)

export type DrawerContainerProps = DrawerVariantProps & Ark.DialogContainerProps
export const DrawerContainer = styled(Ark.DialogContainer, drawer)

export type DrawerContentProps = Ark.DialogContentProps
export const DrawerContent = styled(Ark.DialogContent)

export type DrawerCloseTriggerProps = Ark.DialogCloseTriggerProps
export const DrawerCloseTrigger = styled(Ark.DialogCloseTrigger)

export type DrawerTitleProps = Ark.DialogTitleProps
export const DrawerTitle = styled(Ark.DialogTitle)

export type DrawerDescriptionProps = Ark.DialogDescriptionProps
export const DrawerDescription = styled(Ark.DialogDescription)
