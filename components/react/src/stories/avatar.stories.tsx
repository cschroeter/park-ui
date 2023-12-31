import type { Meta } from '@storybook/react'
import { Avatar } from '../avatar'

type AvatarType = typeof Avatar

const meta: Meta<AvatarType> = {
  title: 'Avatar',
  component: Avatar,
}

export default meta

export const Basic = () => (
  <Avatar name="Christian Schröter" src="https://avatars.githubusercontent.com/u/1846056?v=4" />
)

export const WithFallback = () => <Avatar name="Christian Schröter" />
