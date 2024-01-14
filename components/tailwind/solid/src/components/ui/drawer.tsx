import { ark, Dialog as ArkDrawer } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'drawer',
  defaultVariants: { variant: 'right' },
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
    variant: {
      left: {
        trigger: 'drawer__trigger--variant_left',
        backdrop: 'drawer__backdrop--variant_left',
        positioner: 'drawer__positioner--variant_left',
        content: 'drawer__content--variant_left',
        title: 'drawer__title--variant_left',
        description: 'drawer__description--variant_left',
        closeTrigger: 'drawer__closeTrigger--variant_left',
        header: 'drawer__header--variant_left',
        body: 'drawer__body--variant_left',
        footer: 'drawer__footer--variant_left',
      },
      right: {
        trigger: 'drawer__trigger--variant_right',
        backdrop: 'drawer__backdrop--variant_right',
        positioner: 'drawer__positioner--variant_right',
        content: 'drawer__content--variant_right',
        title: 'drawer__title--variant_right',
        description: 'drawer__description--variant_right',
        closeTrigger: 'drawer__closeTrigger--variant_right',
        header: 'drawer__header--variant_right',
        body: 'drawer__body--variant_right',
        footer: 'drawer__footer--variant_right',
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
