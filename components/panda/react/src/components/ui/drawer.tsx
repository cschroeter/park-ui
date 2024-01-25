import { Dialog as ArkDrawer } from '@ark-ui/react/dialog'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { drawer } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(drawer)

const Drawer = withProvider(ArkDrawer.Root)
const DrawerBackdrop = withContext(styled(ArkDrawer.Backdrop), 'backdrop')
const DrawerBody = withContext(styled(ark.div), 'body')
const DrawerCloseTrigger = withContext(styled(ArkDrawer.CloseTrigger), 'closeTrigger')
const DrawerContent = withContext(styled(ArkDrawer.Content), 'content')
const DrawerDescription = withContext(styled(ArkDrawer.Description), 'description')
const DrawerFooter = withContext(styled(ark.div), 'footer')
const DrawerHeader = withContext(styled(ark.div), 'header')
const DrawerPositioner = withContext(styled(ArkDrawer.Positioner), 'positioner')
const DrawerTitle = withContext(styled(ArkDrawer.Title), 'title')
const DrawerTrigger = withContext(styled(ArkDrawer.Trigger), 'trigger')

const Root = Drawer
const Backdrop = DrawerBackdrop
const Body = DrawerBody
const CloseTrigger = DrawerCloseTrigger
const Content = DrawerContent
const Description = DrawerDescription
const Footer = DrawerFooter
const Header = DrawerHeader
const Positioner = DrawerPositioner
const Title = DrawerTitle
const Trigger = DrawerTrigger

export {
  Backdrop,
  Body,
  CloseTrigger,
  Content,
  Description,
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPositioner,
  DrawerTitle,
  DrawerTrigger,
  Footer,
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
}

export interface DrawerProps extends ComponentProps<typeof Drawer> {}
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
