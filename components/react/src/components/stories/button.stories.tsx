import type { Meta } from '@storybook/react'
import { DiamondIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'

const meta: Meta = {
  title: 'Components/Button',
}

export default meta

export const Base = () => <Button>Park UI</Button>

export const Sizes = () => (
  <Stack alignItems="start">
    <Button size="xs">
      <DiamondIcon /> Label
    </Button>
    <Button size="sm">
      <DiamondIcon /> Label
    </Button>
    <Button size="md">
      <DiamondIcon /> Label
    </Button>
    <Button size="lg">
      <DiamondIcon /> Label
    </Button>
    <Button size="xl">
      <DiamondIcon /> Label
    </Button>
    <Button size="2xl">
      <DiamondIcon />
      Label
    </Button>
  </Stack>
)
export const Loading = () => <Button loading>Label</Button>

export const LoadingText = () => (
  <Button loading loadingText="Loading...">
    Park UI
  </Button>
)
