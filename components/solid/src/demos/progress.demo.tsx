import { createEffect, createSignal } from 'solid-js'
import { Progress, type ProgressProps } from '~/components/ui/progress'

export const Demo = (props: ProgressProps) => {
  const [value, setValue] = createSignal(0)

  createEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue === 100 ? 0 : prevValue + 1))
    }, Math.random() * 500)

    return () => clearInterval(interval)
  })

  return <Progress {...props} value={value()} min={0} max={100} />
}
