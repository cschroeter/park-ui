import { Toast as ArkToast } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { toast } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

export const ToastRoot = withProvider(styled(ArkToast.Root), 'root')
export const ToastCloseTrigger = withContext(styled(ArkToast.CloseTrigger), 'closeTrigger')
export const ToastDescription = withContext(styled(ArkToast.Description), 'description')
export const ToastGroup = withContext(styled(ArkToast.Group), 'group')
export const ToastTitle = withContext(styled(ArkToast.Title), 'title')

export const Toast = Object.assign(ToastRoot, {
  Root: ToastRoot,
  CloseTrigger: ToastCloseTrigger,
  Description: ToastDescription,
  Group: ToastGroup,
  Title: ToastTitle,
})

export type ToastProps = typeof ToastRoot
export type ToastCloseTriggerProps = typeof ToastCloseTrigger
export type ToastDescriptionProps = typeof ToastDescription
export type ToastGroupProps = typeof ToastGroup
export type ToastTitleProps = typeof ToastTitle
