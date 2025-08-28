import { RadioButtonGroup } from '@/components/ui'

export const App = () => {
  const options = [{ value: 'S' }, { value: 'M' }, { value: 'L' }, { value: 'XL' }]

  return (
    <RadioButtonGroup.Root defaultValue="M">
      {options.map((option, id) => (
        <RadioButtonGroup.Item key={id} value={option.value} disabled={option.value === 'L'} px="0">
          <RadioButtonGroup.ItemControl />
          <RadioButtonGroup.ItemText>{option.value}</RadioButtonGroup.ItemText>
          <RadioButtonGroup.ItemHiddenInput />
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup.Root>
  )
}
