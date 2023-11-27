import { ark, Dialog as ArkDrawer } from '@ark-ui/react'
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

export const Drawer = Object.assign(DrawerRoot, {
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
})

export type DrawerProps = typeof DrawerRoot
export type DrawerBackdropProps = typeof DrawerBackdrop
export type DrawerBodyProps = typeof DrawerBody
export type DrawerCloseTriggerProps = typeof DrawerCloseTrigger
export type DrawerContentProps = typeof DrawerContent
export type DrawerDescriptionProps = typeof DrawerDescription
export type DrawerFooterProps = typeof DrawerFooter
export type DrawerHeaderProps = typeof DrawerHeader
export type DrawerPositionerProps = typeof DrawerPositioner
export type DrawerTitleProps = typeof DrawerTitle
export type DrawerTriggerProps = typeof DrawerTrigger
