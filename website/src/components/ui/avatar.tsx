import * as Ark from '@ark-ui/react/avatar'
import { styled } from 'styled-system/jsx'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/avatar'

const { withProvider, withContext } = createStyleContext(avatar)

export type AvatarProps = Ark.AvatarProps & AvatarVariantProps

const AvatarRoot = withProvider(styled(Ark.Avatar.Root), 'root')
const AvatarFallback = withContext(styled(Ark.Avatar.Fallback), 'fallback')
const AvatarImage = withContext(styled(Ark.Avatar.Image), 'image')

const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
})

export { Avatar, AvatarFallback, AvatarImage }
