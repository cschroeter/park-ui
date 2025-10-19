'use client'
import { useState } from 'react'
import { Stack } from 'styled-system/jsx'
import { Checkbox } from '@/components/ui'

export const App = () => {
  const initialValues = [
    { label: 'Monday', checked: false, value: 'monday' },
    { label: 'Tuesday', checked: false, value: 'tuesday' },
    { label: 'Wednesday', checked: false, value: 'wednesday' },
    { label: 'Thursday', checked: false, value: 'thursday' },
  ]
  const [values, setValues] = useState(initialValues)

  const allChecked = values.every((value) => value.checked)
  const indeterminate = values.some((value) => value.checked) && !allChecked

  return (
    <Stack gap="4" alignItems="start">
      <Checkbox.Root
        checked={indeterminate ? 'indeterminate' : allChecked}
        onCheckedChange={(e) => {
          setValues((current) => current.map((value) => ({ ...value, checked: !!e.checked })))
        }}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>Weekdays</Checkbox.Label>
      </Checkbox.Root>
      {values.map((item, index) => (
        <Checkbox.Root
          ms="6"
          key={item.value}
          checked={item.checked}
          onCheckedChange={(e) =>
            setValues((current) => {
              const newValues = [...current]
              if (!newValues[index]) return newValues
              newValues[index] = { ...newValues[index], checked: !!e.checked }
              return newValues
            })
          }
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label> {item.label}</Checkbox.Label>
        </Checkbox.Root>
      ))}
    </Stack>
  )
}
