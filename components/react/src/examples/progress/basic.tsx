import { Progress } from '@/components/ui'

export const App = () => {
  return (
    <Progress.Root value={32}>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
