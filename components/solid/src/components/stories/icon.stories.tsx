import { DiamondIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Stack } from 'styled-system/jsx'
import { Icon } from '~/components/ui/icon'

const meta: Meta = {
  title: 'Components/Icon',
}

export default meta

export const Base = () => <Icon as={DiamondIcon} />

export const Sizes = () => (
  <Stack>
    <Icon size="xs" as={DiamondIcon} />
    <Icon size="sm" as={DiamondIcon} />
    <Icon size="md" as={DiamondIcon} />
    <Icon size="lg" as={DiamondIcon} />
    <Icon size="xl" as={DiamondIcon} />
  </Stack>
)
