import { Progress } from '@/components/ui'

export const App = () => {
  return (
    <Progress.Root defaultValue={42} striped animated>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
