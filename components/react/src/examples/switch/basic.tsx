import { Switch } from '@/components/ui'

export const App = () => {
  return (
    <Switch.Root defaultChecked>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  )
}
