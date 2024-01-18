import type { ProgressProps } from '~/components/ui/progress-circle'
import * as Progress from '~/components/ui/progress-circle'

export const Demo = (props: ProgressProps) => {
  return (
    <>
      <Progress.Root {...props} min={0} max={100} defaultValue={50}>
        <Progress.Label>Label</Progress.Label>
        <Progress.ValueText />
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
      </Progress.Root>
    </>
  )
}
