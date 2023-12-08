import { RadioButtonGroup } from '~/components/ui/radio-button-group'

export const Demo = () => {
  const options = [{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }]

  return (
    <RadioButtonGroup.Root defaultValue="M">
      {options.map((option, id) => (
        <RadioButtonGroup.Item
          key={id}
          value={option.value}
          disabled={option.disabled}
          className="px-0"
        >
          <RadioButtonGroup.ItemControl />
          <RadioButtonGroup.ItemText>{option.value}</RadioButtonGroup.ItemText>
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup.Root>
  )
}
