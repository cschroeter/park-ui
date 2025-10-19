import { Stack } from 'styled-system/jsx'
import { RadioGroup } from '@/components/ui'

export const App = () => {
  const colors = ['blue', 'green', 'amber', 'red'] as const
  return (
    <Stack gap="4">
      {colors.map((color) => (
        <RadioGroup.Root
          key={color}
          defaultValue="react"
          colorPalette={color}
          flexDir="row"
          gap="6"
        >
          {items.map((item) => (
            <RadioGroup.Item key={item.value} value={item.value}>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemControl />
              <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
      ))}
    </Stack>
  )
}

const items = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
]
