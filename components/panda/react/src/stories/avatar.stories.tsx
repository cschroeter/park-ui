import type { Meta } from '@storybook/react'
import { Avatar, type AvatarProps } from '~/components/ui/avatar'

const meta: Meta<AvatarProps> = {
  title: 'Avatar',
  component: Avatar,
}

export default meta

export const Base = () => (
  <Avatar name="Christian Schröter" src="https://avatars.githubusercontent.com/u/1846056?v=4" />
)
export const NameOnly = () => <Avatar name="Christian Schröter" />
export const NoData = () => <Avatar />
