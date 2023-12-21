import { Dialog as ArkDrawer } from '@ark-ui/react/dialog'
import { ark } from '@ark-ui/react/factory'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Drawer')

const Drawer = withProvider(ArkDrawer.Root)
const DrawerBackdrop = withContext(chakra(ArkDrawer.Backdrop), 'backdrop')
const DrawerBody = withContext(chakra(ark.div), 'body')
const DrawerCloseTrigger = withContext(chakra(ArkDrawer.CloseTrigger), 'closeTrigger')
const DrawerContent = withContext(chakra(ArkDrawer.Content), 'content')
const DrawerDescription = withContext(chakra(ArkDrawer.Description), 'description')
const DrawerFooter = withContext(chakra(ark.div), 'footer')
const DrawerHeader = withContext(chakra(ark.div), 'header')
const DrawerPositioner = withContext(chakra(ArkDrawer.Positioner), 'positioner')
const DrawerTitle = withContext(chakra(ArkDrawer.Title), 'title')
const DrawerTrigger = withContext(chakra(ArkDrawer.Trigger), 'trigger')

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

export interface DrawerProps extends HTMLChakraProps<typeof Drawer> {}
export interface DrawerBackdropProps extends HTMLChakraProps<typeof DrawerBackdrop> {}
export interface DrawerBodyProps extends HTMLChakraProps<typeof DrawerBody> {}
export interface DrawerCloseTriggerProps extends HTMLChakraProps<typeof DrawerCloseTrigger> {}
export interface DrawerContentProps extends HTMLChakraProps<typeof DrawerContent> {}
export interface DrawerDescriptionProps extends HTMLChakraProps<typeof DrawerDescription> {}
export interface DrawerFooterProps extends HTMLChakraProps<typeof DrawerFooter> {}
export interface DrawerHeaderProps extends HTMLChakraProps<typeof DrawerHeader> {}
export interface DrawerPositionerProps extends HTMLChakraProps<typeof DrawerPositioner> {}
export interface DrawerTitleProps extends HTMLChakraProps<typeof DrawerTitle> {}
export interface DrawerTriggerProps extends HTMLChakraProps<typeof DrawerTrigger> {}
