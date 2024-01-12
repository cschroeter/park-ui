import { Avatar as ArkAvatar } from '@ark-ui/react/avatar'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { avatar } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(avatar)

const Avatar = withProvider(styled(ArkAvatar.Root), 'root')
const AvatarFallback = withContext(styled(ArkAvatar.Fallback), 'fallback')
const AvatarImage = withContext(styled(ArkAvatar.Image), 'image')

const Root = Avatar
const Fallback = AvatarFallback
const Image = AvatarImage

export { Avatar, AvatarFallback, AvatarImage, Fallback, Image, Root }

export interface AvatarProps extends HTMLStyledProps<typeof Avatar> {}
export interface AvatarFallbackProps extends HTMLStyledProps<typeof AvatarFallback> {}
export interface AvatarImageProps extends HTMLStyledProps<typeof AvatarImage> {}
