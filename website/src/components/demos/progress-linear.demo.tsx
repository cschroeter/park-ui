import { useState } from 'react'
import type { ProgressProps } from '~/components/ui/progress-linear'
import * as Progress from '~/components/ui/progress-linear'

export const Demo = (props: ProgressProps) => {
  const [value, setValue] = useState(0)

  const timer = setTimeout(() => {
    setValue(value + 10)
    if (value >= 100) {
      clearTimeout(timer)
    }
  }, 1000)

  return (
    <>
      <Progress.Root
        {...props}
        value={value}
        min={0}
        max={100}
        defaultValue={50}
        style={{ width: '320px' }}
      >
        <Progress.Label>Progress Linear</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText />
      </Progress.Root>
    </>
  )
}
