import * as RadioButtonGroup from '~/components/ui/radio-button-group'
import type { RadioGroupProps } from '~/components/ui/radio-group'

export const Demo = (props: RadioGroupProps) => {
  const options = [{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }]

  return (
    <RadioButtonGroup.Root defaultValue="M" {...props}>
      {options.map((option, id) => (
        <RadioButtonGroup.Item key={id} value={option.value} disabled={option.disabled} px="0">
          <RadioButtonGroup.ItemControl />
          <RadioButtonGroup.ItemText>{option.value}</RadioButtonGroup.ItemText>
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup.Root>
  )
}
