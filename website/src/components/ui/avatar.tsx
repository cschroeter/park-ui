import { Avatar as ArkAvatar } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { avatar } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(avatar)

export const AvatarRoot = withProvider(styled(ArkAvatar.Root), 'root')
export const AvatarFallback = withContext(styled(ArkAvatar.Fallback), 'fallback')
export const AvatarImage = withContext(styled(ArkAvatar.Image), 'image')

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
})

export type AvatarProps = typeof AvatarRoot
export type AvatarFallbackProps = typeof AvatarFallback
export type AvatarImageProps = typeof AvatarImage
