import * as Ark from '@ark-ui/solid/toast'
import { styled } from 'styled-system/jsx'
import { toast, type ToastVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

export * from '@ark-ui/solid/toast'
export const ToastProvider = withContext(styled(Ark.ToastProvider), 'provider')
export const ToastTitle = withContext(styled(Ark.ToastTitle), 'title')
export type ToastProps = Ark.ToastProps & ToastVariantProps

const ToastRoot = withProvider(styled(Ark.Toast), 'root')
export const ToastDescription = withContext(styled(Ark.ToastDescription), 'description')
export const ToastCloseTrigger = withContext(styled(Ark.ToastCloseTrigger), 'closeTrigger')
export const ToastPlacements = withContext(styled(Ark.ToastPlacements), 'placements')
export const ToastGroup = withContext(styled(Ark.ToastGroup), 'group')

export const Toast = Object.assign(ToastRoot, {
  Provider: ToastProvider,
  Title: ToastTitle,
  Root: ToastRoot,
  Description: ToastDescription,
  CloseTrigger: ToastCloseTrigger,
  Placements: ToastPlacements,
  Group: ToastGroup,
})
