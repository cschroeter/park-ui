import {
  DialogContainer as ArkDDialogContainer,
  DialogBackdrop as ArkDialogBackdrop,
  type DialogBackdropProps as ArkDialogBackdropProps,
  type DialogContainerProps as ArkDialogContainerProps,
} from '@ark-ui/react/dialog'
import { styled } from 'styled-system/jsx'
import { drawer, type DrawerVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/dialog'

export type DialogBackdropProps = DrawerVariantProps & ArkDialogBackdropProps
export const DialogBackdrop = styled(ArkDialogBackdrop, drawer)

export type DialogContainerProps = DrawerVariantProps & ArkDialogContainerProps
export const DialogContainer = styled(ArkDDialogContainer, drawer)
