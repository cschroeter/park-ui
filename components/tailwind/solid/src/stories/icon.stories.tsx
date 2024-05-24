import { DiamondIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Icon } from '~/components/ui'

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
  <div class="flex flex-col gap-2.5">
    <Icon size="xs">
      <DiamondIcon />
    </Icon>
    <Icon size="sm">
      <DiamondIcon />
    </Icon>
    <Icon size="md">
      <DiamondIcon />
    </Icon>
    <Icon size="lg">
      <DiamondIcon />
    </Icon>
    <Icon size="xl">
      <DiamondIcon />
    </Icon>
  </div>
)
