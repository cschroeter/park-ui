import type { Meta } from '@storybook/react'
import * as Progress from '~/components/ui/progress-linear'

const meta: Meta = {
  title: 'Components/ProgressLinear',
}

export default meta

export const Base = () => {
  return (
    <Progress.Root defaultValue={70}>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Indicator state="loading" />
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
