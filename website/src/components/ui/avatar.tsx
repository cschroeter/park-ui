import * as Ark from '@ark-ui/react/avatar'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(avatar)

export type AvatarProps = Ark.AvatarProps & AvatarVariantProps
const AvatarRoot = withProvider(Ark.Avatar.Root, 'root')
const AvatarFallback = withContext(Ark.Avatar.Fallback, 'fallback')
const AvatarImage = withContext(Ark.Avatar.Image, 'image')

const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
})

export { Avatar, AvatarFallback, AvatarImage, AvatarRoot }
