import * as Ark from '@ark-ui/solid/avatar'
import { styled } from 'styled-system/jsx'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(avatar)

export * from '@ark-ui/solid/avatar'
export type AvatarProps = Ark.AvatarProps & AvatarVariantProps

const AvatarRoot = withProvider(styled(Ark.Avatar), 'root')
export const AvatarFallback = withContext(styled(Ark.AvatarFallback), 'fallback')
export const AvatarImage = withContext(styled(Ark.AvatarImage), 'image')

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
})
