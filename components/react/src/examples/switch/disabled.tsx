import { Switch } from '@/components/ui'

export const App = () => {
  return (
    <Switch.Root disabled>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  )
}
