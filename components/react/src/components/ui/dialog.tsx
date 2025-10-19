'use client'
import { Dialog, useDialogContext } from '@ark-ui/react/dialog'
import { ark } from '@ark-ui/react/factory'
import { type ComponentProps, forwardRef } from 'react'
import { createStyleContext, styled } from 'styled-system/jsx'
import { dialog } from 'styled-system/recipes'

const { withRootProvider, withContext } = createStyleContext(dialog)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})
export const RootProvider = withRootProvider(Dialog.RootProvider, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})
export const Backdrop = withContext(Dialog.Backdrop, 'backdrop')
export const CloseTrigger = withContext(Dialog.CloseTrigger, 'closeTrigger')
export const Content = withContext(Dialog.Content, 'content')
export const Description = withContext(Dialog.Description, 'description')
export const Positioner = withContext(Dialog.Positioner, 'positioner')
export const Title = withContext(Dialog.Title, 'title')
export const Trigger = withContext(Dialog.Trigger, 'trigger')
export const Body = withContext(ark.div, 'body')
export const Header = withContext(ark.div, 'header')
export const Footer = withContext(ark.div, 'footer')

const StyledButton = styled(ark.button)

export const ActionTrigger = forwardRef<HTMLButtonElement, ComponentProps<typeof StyledButton>>(
  function ActionTrigger(props, ref) {
    const dialog = useDialogContext()
    return <StyledButton {...props} ref={ref} onClick={() => dialog.setOpen(false)} />
  },
)

export { DialogContext as Context } from '@ark-ui/react/dialog'
