import { Dialog, useDialogContext } from '@ark-ui/solid/dialog'
import { ark } from '@ark-ui/solid/factory'
import type { ComponentProps } from 'solid-js'
import { createStyleContext, styled } from 'styled-system/jsx'
import { dialog } from 'styled-system/recipes'

const { withRootProvider, withContext } = createStyleContext(dialog)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider(Dialog.Root, {
  defaultProps: () => ({ unmountOnExit: true, lazyMount: true }),
})
export const RootProvider = withRootProvider(Dialog.RootProvider, {
  defaultProps: () => ({ unmountOnExit: true, lazyMount: true }),
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

export const ActionTrigger = (props: ComponentProps<typeof StyledButton>) => {
  const dialog = useDialogContext()

  return <StyledButton {...props} onClick={() => dialog().setOpen(false)} />
}

export { DialogContext as Context } from '@ark-ui/solid/dialog'
