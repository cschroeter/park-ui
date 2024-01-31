import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { RadioButtonGroup } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Radio Button Group',
}

export default meta

export const Base = () => {
  const options = [{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }]

  return (
    <RadioButtonGroup.Root value="M">
      <Index each={options}>
        {(option) => (
          <RadioButtonGroup.Item
            className="px-0"
            value={option().value}
            disabled={option().disabled}
          >
            <RadioButtonGroup.ItemControl />
            <RadioButtonGroup.ItemText>{option().value}</RadioButtonGroup.ItemText>
          </RadioButtonGroup.Item>
        )}
      </Index>
    </RadioButtonGroup.Root>
  )
}
