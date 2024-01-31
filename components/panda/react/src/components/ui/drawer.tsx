import { Dialog as ArkDrawer } from '@ark-ui/react/dialog'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { drawer } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(drawer)

const Root = withProvider(ArkDrawer.Root)
const Backdrop = withContext(styled(ArkDrawer.Backdrop), 'backdrop')
const Body = withContext(styled(ark.div), 'body')
const CloseTrigger = withContext(styled(ArkDrawer.CloseTrigger), 'closeTrigger')
const Content = withContext(styled(ArkDrawer.Content), 'content')
const Description = withContext(styled(ArkDrawer.Description), 'description')
const Footer = withContext(styled(ark.div), 'footer')
const Header = withContext(styled(ark.div), 'header')
const Positioner = withContext(styled(ArkDrawer.Positioner), 'positioner')
const Title = withContext(styled(ArkDrawer.Title), 'title')
const Trigger = withContext(styled(ArkDrawer.Trigger), 'trigger')

export {
  Backdrop,
  Body,
  CloseTrigger,
  Content,
  Description,
  Footer,
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
}

export interface DrawerRootProps extends ComponentProps<typeof Root> {}
export interface DrawerBackdropProps extends ComponentProps<typeof Backdrop> {}
export interface DrawerBodyProps extends ComponentProps<typeof Body> {}
export interface DrawerCloseTriggerProps extends ComponentProps<typeof CloseTrigger> {}
export interface DrawerContentProps extends ComponentProps<typeof Content> {}
export interface DrawerDescriptionProps extends ComponentProps<typeof Description> {}
export interface DrawerFooterProps extends ComponentProps<typeof Footer> {}
export interface DrawerHeaderProps extends ComponentProps<typeof Header> {}
export interface DrawerPositionerProps extends ComponentProps<typeof Positioner> {}
export interface DrawerTitleProps extends ComponentProps<typeof Title> {}
export interface DrawerTriggerProps extends ComponentProps<typeof Trigger> {}
