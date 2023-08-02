import {
  Avatar as ArkAvatar,
  AvatarFallback as ArkAvatarFallback,
  type AvatarFallbackProps as ArkAvatarFallbackProps,
  type AvatarProps as ArkAvatarProps,
} from '@ark-ui/react/avatar'
import { styled } from 'styled-system/jsx'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/avatar'

export type AvatarProps = AvatarVariantProps & ArkAvatarProps
export const Avatar = styled(ArkAvatar, avatar)

export type AvatarFallbackProps = ArkAvatarFallbackProps
export const AvatarFallback = styled(ArkAvatarFallback, avatar)
