import {
  DialogContainer as ArkDDialogContainer,
  DialogBackdrop as ArkDialogBackdrop,
  type DialogBackdropProps as ArkDialogBackdropProps,
  type DialogContainerProps as ArkDialogContainerProps,
} from '@ark-ui/react/dialog'
import { styled } from 'styled-system/jsx'
import { dialog, type DialogVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/dialog'

export type DialogBackdropProps = DialogVariantProps & ArkDialogBackdropProps
export const DialogBackdrop = styled(ArkDialogBackdrop, dialog)

export type DialogContainerProps = DialogVariantProps & ArkDialogContainerProps
export const DialogContainer = styled(ArkDDialogContainer, dialog)
