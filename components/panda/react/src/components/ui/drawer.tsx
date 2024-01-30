import { Dialog as ArkDrawer } from '@ark-ui/react/dialog'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { drawer } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(drawer)

export const DrawerRoot = withProvider(ArkDrawer.Root)
export const DrawerBackdrop = withContext(styled(ArkDrawer.Backdrop), 'backdrop')
export const DrawerBody = withContext(styled(ark.div), 'body')
export const DrawerCloseTrigger = withContext(styled(ArkDrawer.CloseTrigger), 'closeTrigger')
export const DrawerContent = withContext(styled(ArkDrawer.Content), 'content')
export const DrawerDescription = withContext(styled(ArkDrawer.Description), 'description')
export const DrawerFooter = withContext(styled(ark.div), 'footer')
export const DrawerHeader = withContext(styled(ark.div), 'header')
export const DrawerPositioner = withContext(styled(ArkDrawer.Positioner), 'positioner')
export const DrawerTitle = withContext(styled(ArkDrawer.Title), 'title')
export const DrawerTrigger = withContext(styled(ArkDrawer.Trigger), 'trigger')

export const Drawer = {
  Root: DrawerRoot,
  Backdrop: DrawerBackdrop,
  Body: DrawerBody,
  CloseTrigger: DrawerCloseTrigger,
  Content: DrawerContent,
  Description: DrawerDescription,
  Footer: DrawerFooter,
  Header: DrawerHeader,
  Positioner: DrawerPositioner,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
}

export interface DrawerRootProps extends ComponentProps<typeof DrawerRoot> {}
export interface DrawerBackdropProps extends ComponentProps<typeof DrawerBackdrop> {}
export interface DrawerBodyProps extends ComponentProps<typeof DrawerBody> {}
export interface DrawerCloseTriggerProps extends ComponentProps<typeof DrawerCloseTrigger> {}
export interface DrawerContentProps extends ComponentProps<typeof DrawerContent> {}
export interface DrawerDescriptionProps extends ComponentProps<typeof DrawerDescription> {}
export interface DrawerFooterProps extends ComponentProps<typeof DrawerFooter> {}
export interface DrawerHeaderProps extends ComponentProps<typeof DrawerHeader> {}
export interface DrawerPositionerProps extends ComponentProps<typeof DrawerPositioner> {}
export interface DrawerTitleProps extends ComponentProps<typeof DrawerTitle> {}
export interface DrawerTriggerProps extends ComponentProps<typeof DrawerTrigger> {}
