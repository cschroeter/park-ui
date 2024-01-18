import type { Meta } from '@storybook/react'
import * as Progress from '~/components/ui/progress-circle'

const meta: Meta = {
  title: 'Components/ProgressCircle',
}

export default meta

export const Base = () => {
  return (
    <Progress.Root defaultValue={20} min={10} max={30}>
      <Progress.Label>Label</Progress.Label>
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
      <Progress.ValueText />
    </Progress.Root>
  )
}
