import type { Meta } from '@storybook/react'
import { RadioButtonGroup } from '~/components/ui/radio-button-group'

const meta: Meta = {
  title: 'Components/Radio Button Group',
}

export default meta

export const Base = () => {
  const options = [{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }]

  return (
    <RadioButtonGroup.Root defaultValue="M">
      {options.map((option) => (
        <RadioButtonGroup.Item
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          px="0"
        >
          <RadioButtonGroup.ItemControl />
          <RadioButtonGroup.ItemText>{option.value}</RadioButtonGroup.ItemText>
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup.Root>
  )
}
