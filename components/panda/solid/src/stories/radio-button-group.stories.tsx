import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { RadioButtonGroup } from '~/components/ui/radio-button-group'

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
          <RadioButtonGroup.Item value={option().value} disabled={option().disabled} px="0">
            <RadioButtonGroup.ItemControl />
            <RadioButtonGroup.ItemText>{option().value}</RadioButtonGroup.ItemText>
          </RadioButtonGroup.Item>
        )}
      </Index>
    </RadioButtonGroup.Root>
  )
}
