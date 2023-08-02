import {
  ToastGroup as ArkToastGroup,
  type ToastGroupProps as ArkToastGroupProps,
} from '@ark-ui/react/toast'
import { styled } from 'styled-system/jsx'
import { toast, type ToastVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/toast'

export type ToastProps = ToastVariantProps & ArkToastGroupProps
export const ToastGroup = styled(ArkToastGroup, toast)
