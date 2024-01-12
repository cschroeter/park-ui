import { Avatar as ArkAvatar } from '@ark-ui/react/avatar'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('Avatar')

const Avatar = withProvider(chakra(ArkAvatar.Root), 'root')
const AvatarFallback = withContext(chakra(ArkAvatar.Fallback), 'fallback')
const AvatarImage = withContext(chakra(ArkAvatar.Image), 'image')

const Root = Avatar
const Fallback = AvatarFallback
const Image = AvatarImage

export { Avatar, AvatarFallback, AvatarImage, Fallback, Image, Root }

export interface AvatarProps extends HTMLChakraProps<typeof Avatar> {}
export interface AvatarFallbackProps extends HTMLChakraProps<typeof AvatarFallback> {}
export interface AvatarImageProps extends HTMLChakraProps<typeof AvatarImage> {}
