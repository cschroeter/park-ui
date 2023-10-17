import { Radio, RadioButtonGroup, RadioControl, RadioLabel, type RadioGroupProps } from './snippet'

export const Demo = (props: RadioGroupProps) => {
  const options = [{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }]
  return (
    <RadioButtonGroup defaultValue="M" {...props}>
      {options.map((option, id) => (
        <Radio key={id} value={option.value} disabled={option.disabled} px="0">
          <RadioControl />
          <RadioLabel>{option.value}</RadioLabel>
        </Radio>
      ))}
    </RadioButtonGroup>
  )
}
