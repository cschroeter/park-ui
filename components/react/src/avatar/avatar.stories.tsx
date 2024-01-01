import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import { Avatar, type AvatarProps } from './avatar'

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

export const Sizes = () => {
  return (
    <Stack gap="8">
      <Stack direction="row">
        {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
          <Avatar
            key={size}
            name="Christian Schröter"
            src="https://avatars.githubusercontent.com/u/1846056?v=4"
            size={size}
          />
        ))}
      </Stack>
      <Stack direction="row">
        {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
          <Avatar key={size} name="Christian Schröter" size={size} />
        ))}
      </Stack>
      <Stack direction="row">
        {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
          <Avatar key={size} size={size} />
        ))}
      </Stack>
    </Stack>
  )
}
