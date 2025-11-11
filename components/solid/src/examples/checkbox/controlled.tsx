import { createSignal } from 'solid-js'

import { Checkbox } from '@/components/ui'

export const App = () => {
  const [checked, setChecked] = createSignal<Checkbox.CheckedState>(false)

  return (
    <Checkbox.Root checked={checked()} onCheckedChange={(e) => setChecked(e.checked)}>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Label</Checkbox.Label>
    </Checkbox.Root>
  )
}
