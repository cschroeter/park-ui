'use client'
import { useState } from 'react'
import { RadioGroup } from '@/components/ui'

export const App = () => {
  const [value, setValue] = useState<string | null>('react')
  return (
    <RadioGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
      {items.map((item) => (
        <RadioGroup.Item key={item.value} value={item.value}>
          <RadioGroup.ItemHiddenInput />
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}

const items = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
]
