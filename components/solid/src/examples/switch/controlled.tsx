import { createSignal } from 'solid-js'

import { Switch } from '@/components/ui'

export const App = () => {
  const [checked, setChecked] = createSignal(false)
  return (
    <Switch.Root checked={checked()} onCheckedChange={(e) => setChecked(e.checked)}>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  )
}
