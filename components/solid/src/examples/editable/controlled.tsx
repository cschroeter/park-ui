import { createSignal } from 'solid-js'

import { Editable } from '@/components/ui'

export const App = () => {
  const [name, setName] = createSignal('')
  return (
    <Editable.Root
      value={name()}
      onValueChange={(e) => setName(e.value)}
      placeholder="Click to edit"
    >
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}
