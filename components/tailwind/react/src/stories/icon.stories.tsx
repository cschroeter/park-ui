import type { Meta } from '@storybook/react'
import { DiamondIcon } from 'lucide-react'
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
  <div className="flex flex-col gap-2.5">
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
  </div>
)
