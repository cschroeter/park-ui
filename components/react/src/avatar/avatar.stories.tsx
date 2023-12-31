import type { Meta } from '@storybook/react'
import { Avatar, type AvatarProps } from './avatar'

const meta: Meta<AvatarProps> = {
  title: 'Avatar',
  component: Avatar,
}

export default meta

export const Basic = () => (
  <Avatar name="Christian Schröter" src="https://avatars.githubusercontent.com/u/1846056?v=4" />
)

export const WithFallback = () => <Avatar name="Christian Schröter" />

export const Size = () => (
  <Avatar
    name="Christian Schröter"
    src="https://avatars.githubusercontent.com/u/1846056?v=4"
    size="2xl"
  />
)
