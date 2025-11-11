import { createSignal } from 'solid-js'

import { NumberInput } from '@/components/ui'

export const App = () => {
  const [value, setValue] = createSignal('10')
  return (
    <NumberInput.Root value={value()} onValueChange={(e) => setValue(e.value)}>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
