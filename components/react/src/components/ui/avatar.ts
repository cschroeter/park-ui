'use client'
import { Avatar } from '@ark-ui/react/avatar'
import { createStyleContext } from '@park-ui/styled-system/jsx'
import { avatar } from '@park-ui/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(avatar)

export const Root = withProvider(Avatar.Root, 'root')
export const Image = withContext(Avatar.Image, 'image')
export const Fallback = withContext(Avatar.Fallback, 'fallback')
