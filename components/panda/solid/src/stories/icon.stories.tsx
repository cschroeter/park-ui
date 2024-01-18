import { DiamondIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Stack } from 'styled-system/jsx'
import { Icon } from '~/components/ui/icon'

const meta: Meta = {
  title: 'Components/Icon',
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
