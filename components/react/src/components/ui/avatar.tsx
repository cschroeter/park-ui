'use client'
import { Avatar } from '@ark-ui/react/avatar'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { avatar } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(avatar)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Avatar.Root, 'root')
export const Image = withContext(Avatar.Image, 'image')
export const Fallback = withContext(Avatar.Fallback, 'fallback')

export { AvatarContext as Context } from '@ark-ui/react/avatar'
