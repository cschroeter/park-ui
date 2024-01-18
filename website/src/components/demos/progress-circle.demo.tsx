import type { ProgressProps } from '~/components/ui/progress-circle'
import * as Progress from '~/components/ui/progress-circle'

export const Demo = (props: ProgressProps) => {
  return (
    <Progress.Root {...props} defaultValue={20} min={10} max={30}>
      <Progress.Label>Label</Progress.Label>
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
      <Progress.ValueText />
    </Progress.Root>
  )
}
