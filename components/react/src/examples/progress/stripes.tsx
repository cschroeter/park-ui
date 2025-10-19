import { Progress } from '@/components/ui'

export const App = () => {
  return (
    <Progress.Root defaultValue={42} striped>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
