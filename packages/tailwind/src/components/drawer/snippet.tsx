import * as Ark from '@ark-ui/react/dialog'
import { createStyleContext } from '~/lib/create-style-context'
import { drawerStyles } from './recipe'

const { withProvider, withContext } = createStyleContext(drawerStyles)

export * from '@ark-ui/react/dialog'

const DrawerRoot = withProvider(Ark.Dialog.Root)
export const DrawerBackdrop = withContext(Ark.Dialog.Backdrop, 'backdrop')
export const DrawerCloseTrigger = withContext(Ark.Dialog.CloseTrigger, 'closeTrigger')
export const DrawerContainer = withContext(Ark.Dialog.Container, 'container')
export const DrawerContent = withContext(Ark.Dialog.Content, 'content')
export const DrawerDescription = withContext(Ark.Dialog.Description, 'description')
export const DrawerTitle = withContext(Ark.Dialog.Title, 'title')
export const DrawerTrigger = withContext(Ark.Dialog.Trigger, 'trigger')

export const Drawer = Object.assign(DrawerRoot, {
  Root: DrawerRoot,
  Backdrop: DrawerBackdrop,
  CloseTrigger: DrawerCloseTrigger,
  Container: DrawerContainer,
  Content: DrawerContent,
  Description: DrawerDescription,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
})
