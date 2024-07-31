import { type Assign, Avatar } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type AvatarVariantProps, avatar } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(avatar)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Avatar.RootProviderBaseProps>, AvatarVariantProps>
>(Avatar.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Avatar.RootBaseProps>, AvatarVariantProps>
>(Avatar.Root, 'root')

export const Fallback = withContext<Assign<HTMLStyledProps<'span'>, Avatar.FallbackBaseProps>>(
  Avatar.Fallback,
  'fallback',
)

export const Image = withContext<Assign<HTMLStyledProps<'img'>, Avatar.ImageBaseProps>>(
  Avatar.Image,
  'image',
)

export { AvatarContext as Context } from '@ark-ui/solid'
export type { AvatarStatusChangeDetails as StatusChangeDetails } from '@ark-ui/solid'
