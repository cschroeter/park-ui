import { ark, Dialog as ArkDrawer } from '@ark-ui/solid'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
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

export interface DrawerProps extends HTMLStyledProps<typeof Drawer> {}
export interface DrawerBackdropProps extends HTMLStyledProps<typeof DrawerBackdrop> {}
export interface DrawerBodyProps extends HTMLStyledProps<typeof DrawerBody> {}
export interface DrawerCloseTriggerProps extends HTMLStyledProps<typeof DrawerCloseTrigger> {}
export interface DrawerContentProps extends HTMLStyledProps<typeof DrawerContent> {}
export interface DrawerDescriptionProps extends HTMLStyledProps<typeof DrawerDescription> {}
export interface DrawerFooterProps extends HTMLStyledProps<typeof DrawerFooter> {}
export interface DrawerHeaderProps extends HTMLStyledProps<typeof DrawerHeader> {}
export interface DrawerPositionerProps extends HTMLStyledProps<typeof DrawerPositioner> {}
export interface DrawerTitleProps extends HTMLStyledProps<typeof DrawerTitle> {}
export interface DrawerTriggerProps extends HTMLStyledProps<typeof DrawerTrigger> {}
