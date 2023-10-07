import * as Ark from '@ark-ui/react/avatar'
import { createStyleContext } from '~/lib/create-style-context'
import { avatarStyles } from './recipe'
export * from '@ark-ui/react/avatar'

export type AvatarProps = React.ComponentProps<typeof Avatar>

const { withProvider, withContext } = createStyleContext(avatarStyles)

const AvatarRoot = withProvider(Ark.Avatar.Root, 'root')
export const AvatarFallback = withContext(Ark.Avatar.Fallback, 'fallback')
export const AvatarImage = withContext(Ark.Avatar.Image, 'image')

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
})
