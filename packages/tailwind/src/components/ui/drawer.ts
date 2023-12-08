import { ark, Dialog as ArkDrawer } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'drawer',
  defaultVariants: { placement: 'right' },
  slots: {
    trigger: 'drawer__trigger',
    backdrop: 'drawer__backdrop',
    positioner: 'drawer__positioner',
    content: 'drawer__content',
    title: 'drawer__title',
    description: 'drawer__description',
    closeTrigger: 'drawer__closeTrigger',
    header: 'drawer__header',
    body: 'drawer__body',
    footer: 'drawer__footer',
  },
  variants: {
    placement: {
      left: {
        trigger: 'drawer__trigger--placement_left',
        backdrop: 'drawer__backdrop--placement_left',
        positioner: 'drawer__positioner--placement_left',
        content: 'drawer__content--placement_left',
        title: 'drawer__title--placement_left',
        description: 'drawer__description--placement_left',
        closeTrigger: 'drawer__closeTrigger--placement_left',
        header: 'drawer__header--placement_left',
        body: 'drawer__body--placement_left',
        footer: 'drawer__footer--placement_left',
      },
      right: {
        trigger: 'drawer__trigger--placement_right',
        backdrop: 'drawer__backdrop--placement_right',
        positioner: 'drawer__positioner--placement_right',
        content: 'drawer__content--placement_right',
        title: 'drawer__title--placement_right',
        description: 'drawer__description--placement_right',
        closeTrigger: 'drawer__closeTrigger--placement_right',
        header: 'drawer__header--placement_right',
        body: 'drawer__body--placement_right',
        footer: 'drawer__footer--placement_right',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

export const DrawerRoot = withProvider(ArkDrawer.Root)
export const DrawerBackdrop = withContext(ArkDrawer.Backdrop, 'backdrop')
export const DrawerBody = withContext(ark.div, 'body')
export const DrawerCloseTrigger = withContext(ArkDrawer.CloseTrigger, 'closeTrigger')
export const DrawerContent = withContext(ArkDrawer.Content, 'content')
export const DrawerDescription = withContext(ArkDrawer.Description, 'description')
export const DrawerFooter = withContext(ark.div, 'footer')
export const DrawerHeader = withContext(ark.div, 'header')
export const DrawerPositioner = withContext(ArkDrawer.Positioner, 'positioner')
export const DrawerTitle = withContext(ArkDrawer.Title, 'title')
export const DrawerTrigger = withContext(ArkDrawer.Trigger, 'trigger')

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
