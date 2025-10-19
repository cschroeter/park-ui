import { RadioGroup } from '@/components/ui'

export const App = () => {
  return (
    <RadioGroup.Root defaultValue="react">
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
