'use client'
import { useState } from 'react'
import { PinInput } from '@/components/ui'

export const App = () => {
  const [value, setValue] = useState(['', '', '', ''])
  return (
    <PinInput.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <PinInput.HiddenInput />
      <PinInput.Control>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
        <PinInput.Input index={3} />
      </PinInput.Control>
    </PinInput.Root>
  )
}
