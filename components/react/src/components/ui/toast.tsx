'use client'
import { Toast } from '@ark-ui/react/toast'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { toast } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(toast)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Toast.Root, 'root')
export const Title = withContext(Toast.Title, 'title')
export const Description = withContext(Toast.Description, 'description')
export const ActionTrigger = withContext(Toast.ActionTrigger, 'actionTrigger')
export const CloseTrigger = withContext(Toast.CloseTrigger, 'closeTrigger')

export { ToastContext as Context } from '@ark-ui/react/toast'
