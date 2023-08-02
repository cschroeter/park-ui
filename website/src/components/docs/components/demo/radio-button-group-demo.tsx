import {
  Radio,
  RadioButtonGroup,
  RadioControl,
  RadioInput,
  RadioLabel,
  type RadioGroupProps,
} from '~/components/radio-button-group'

export const RadioButtonGroupDemo = (props: RadioGroupProps) => {
  const options = [{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }]
  return (
    <RadioButtonGroup defaultValue="react" orientation="vertical" {...props}>
      {options.map((option, id) => (
        <Radio key={id} value={option.value} disabled={option.disabled}>
          <RadioInput data-peer />
          <RadioControl />
          <RadioLabel>{option.value}</RadioLabel>
        </Radio>
      ))}
    </RadioButtonGroup>
  )
}
