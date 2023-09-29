import {
  Radio,
  RadioControl,
  RadioGroup,
  RadioLabel,
  type RadioGroupProps,
} from '~/components/ui/radio-group'

export const Demo = (props: RadioGroupProps) => {
  const options = [
    { id: 'react', label: 'React' },
    { id: 'solid', label: 'Solid' },
    { id: 'svelte', label: 'Svelte', disabled: true },
    { id: 'vue', label: 'Vue' },
  ]
  return (
    <RadioGroup defaultValue="react" orientation="vertical" {...props}>
      {options.map((option) => (
        <Radio key={option.id} value={option.id} disabled={option.disabled}>
          <RadioControl />
          <RadioLabel>{option.label}</RadioLabel>
        </Radio>
      ))}
    </RadioGroup>
  )
}
