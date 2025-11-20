'use client'
import { useState } from 'react'
import { Editable } from '@/components/ui'

export const App = () => {
  const [name, setName] = useState('')
  return (
    <Editable.Root value={name} onValueChange={(e) => setName(e.value)} placeholder="Click to edit">
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}
