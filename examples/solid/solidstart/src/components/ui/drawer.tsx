import * as Ark from '@ark-ui/solid/dialog'
import { styled } from 'styled-system/jsx'
import { drawer, type DrawerVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(drawer)

export * from '@ark-ui/solid/dialog'
export type DrawerProps = Ark.DialogProps & DrawerVariantProps

const DrawerRoot = withProvider(styled(Ark.Dialog), 'root')
export const DrawerBackdrop = withContext(styled(Ark.DialogBackdrop), 'backdrop')
export const DrawerCloseTrigger = withContext(styled(Ark.DialogCloseTrigger), 'closeTrigger')
export const DrawerContainer = withContext(styled(Ark.DialogContainer), 'container')
export const DrawerContent = withContext(styled(Ark.DialogContent), 'content')
export const DrawerDescription = withContext(styled(Ark.DialogDescription), 'description')
export const DrawerTitle = withContext(styled(Ark.DialogTitle), 'title')
export const DrawerTrigger = withContext(styled(Ark.DialogTrigger), 'trigger')

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
