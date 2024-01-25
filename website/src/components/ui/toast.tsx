import { Toast as ArkToast } from '@ark-ui/react/toast'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { toast } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

const Toast = withProvider(styled(ArkToast.Root), 'root')
const ToastCloseTrigger = withContext(styled(ArkToast.CloseTrigger), 'closeTrigger')
const ToastDescription = withContext(styled(ArkToast.Description), 'description')
const ToastGroup = withContext(styled(ArkToast.Group), 'group')
const ToastTitle = withContext(styled(ArkToast.Title), 'title')

const Root = Toast
const CloseTrigger = ToastCloseTrigger
const Description = ToastDescription
const Group = ToastGroup
const Title = ToastTitle

export {
  CloseTrigger,
  Description,
  Group,
  Root,
  Title,
  Toast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastTitle,
}

export interface ToastProps extends ComponentProps<typeof Toast> {}
export interface ToastCloseTriggerProps extends ComponentProps<typeof ToastCloseTrigger> {}
export interface ToastDescriptionProps extends ComponentProps<typeof ToastDescription> {}
export interface ToastGroupProps extends ComponentProps<typeof ToastGroup> {}
export interface ToastTitleProps extends ComponentProps<typeof ToastTitle> {}
