import type { Meta } from '@storybook/react'
import { DiamondIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Icon, type IconProps } from '~/components/ui/icon'

const meta: Meta<IconProps> = {
  title: 'Icon',
  component: Icon,
}

export default meta

export const Base = () => (
  <Icon>
    <DiamondIcon />
  </Icon>
)

export const Sizes = () => (
  <Stack>
    <Icon size="xs">
      <DiamondIcon />
    </Icon>
    <Icon size="sm">
      <DiamondIcon />
    </Icon>
    <Icon size="md">
      <DiamondIcon />
    </Icon>
    <Icon size="xl">
      <DiamondIcon />
    </Icon>
    <Icon size="2xl">
      <DiamondIcon />
    </Icon>
  </Stack>
)
