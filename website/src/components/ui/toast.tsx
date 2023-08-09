import * as Ark from '@ark-ui/react/toast'
import { styled } from 'styled-system/jsx'
import { toast, type ToastVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/toast'

const { withProvider, withContext } = createStyleContext(toast)

const ToastProvider = withContext(styled(Ark.Toast.Provider), 'provider')
const ToastTitle = withContext(styled(Ark.Toast.Title), 'title')
export type ToastProps = Ark.ToastProps & ToastVariantProps

const ToastRoot = withProvider(styled(Ark.Toast.Root), 'root')
const ToastDescription = withContext(styled(Ark.Toast.Description), 'description')
const ToastCloseTrigger = withContext(styled(Ark.Toast.CloseTrigger), 'closeTrigger')
const ToastPlacements = withContext(styled(Ark.Toast.Placements), 'placements')
const ToastGroup = withContext(styled(Ark.Toast.Group), 'group')

const Toast = Object.assign(ToastRoot, {
  Provider: ToastProvider,
  Title: ToastTitle,
  Root: ToastRoot,
  Description: ToastDescription,
  CloseTrigger: ToastCloseTrigger,
  Placements: ToastPlacements,
  Group: ToastGroup,
})

export {
  Toast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastPlacements,
  ToastProvider,
  ToastTitle,
}
