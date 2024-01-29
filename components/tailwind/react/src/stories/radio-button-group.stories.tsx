import type { Meta } from '@storybook/react'
import * as RadioButtonGroup from '~/components/ui/radio-button-group'

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
          className="px-0"
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          <RadioButtonGroup.ItemControl />
          <RadioButtonGroup.ItemText>{option.value}</RadioButtonGroup.ItemText>
        </RadioButtonGroup.Item>
      ))}
    </RadioButtonGroup.Root>
  )
}
