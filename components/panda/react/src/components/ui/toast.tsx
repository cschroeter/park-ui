import { Toast as ArkToast } from '@ark-ui/react/toast'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { toast } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

const Root = withProvider(styled(ArkToast.Root), 'root')
const CloseTrigger = withContext(styled(ArkToast.CloseTrigger), 'closeTrigger')
const Description = withContext(styled(ArkToast.Description), 'description')
const Group = withContext(styled(ArkToast.Group), 'group')
const Title = withContext(styled(ArkToast.Title), 'title')

export { CloseTrigger, Description, Group, Root, Title }

export interface ToastRootProps extends ComponentProps<typeof Root> {}
export interface ToastCloseTriggerProps extends ComponentProps<typeof CloseTrigger> {}
export interface ToastDescriptionProps extends ComponentProps<typeof Description> {}
export interface ToastGroupProps extends ComponentProps<typeof Group> {}
export interface ToastTitleProps extends ComponentProps<typeof Title> {}
