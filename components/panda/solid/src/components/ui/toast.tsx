import { Toast as ArkToast } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { toast } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

export const ToastRoot = withProvider(styled(ArkToast.Root), 'root')
export const ToastCloseTrigger = withContext(styled(ArkToast.CloseTrigger), 'closeTrigger')
export const ToastDescription = withContext(styled(ArkToast.Description), 'description')
export const ToastGroup = withContext(styled(ArkToast.Group), 'group')
export const ToastTitle = withContext(styled(ArkToast.Title), 'title')

export const Toast = {
  Root: ToastRoot,
  CloseTrigger: ToastCloseTrigger,
  Description: ToastDescription,
  Group: ToastGroup,
  Title: ToastTitle,
}

export interface ToastRootProps extends ComponentProps<typeof ToastRoot> {}
export interface ToastCloseTriggerProps extends ComponentProps<typeof ToastCloseTrigger> {}
export interface ToastDescriptionProps extends ComponentProps<typeof ToastDescription> {}
export interface ToastGroupProps extends ComponentProps<typeof ToastGroup> {}
export interface ToastTitleProps extends ComponentProps<typeof ToastTitle> {}
