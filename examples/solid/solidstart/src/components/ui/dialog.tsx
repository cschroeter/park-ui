import * as Ark from '@ark-ui/solid/dialog'
import { styled } from 'styled-system/jsx'
import { dialog, type DialogVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(dialog)

export * from '@ark-ui/solid/dialog'
export type DialogProps = Ark.DialogProps & DialogVariantProps

const DialogRoot = withProvider(styled(Ark.Dialog), 'root')
export const DialogBackdrop = withContext(styled(Ark.DialogBackdrop), 'backdrop')
export const DialogCloseTrigger = withContext(styled(Ark.DialogCloseTrigger), 'closeTrigger')
export const DialogContainer = withContext(styled(Ark.DialogContainer), 'container')
export const DialogContent = withContext(styled(Ark.DialogContent), 'content')
export const DialogDescription = withContext(styled(Ark.DialogDescription), 'description')
export const DialogTitle = withContext(styled(Ark.DialogTitle), 'title')
export const DialogTrigger = withContext(styled(Ark.DialogTrigger), 'trigger')

export const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Backdrop: DialogBackdrop,
  CloseTrigger: DialogCloseTrigger,
  Container: DialogContainer,
  Content: DialogContent,
  Description: DialogDescription,
  Title: DialogTitle,
  Trigger: DialogTrigger,
})
