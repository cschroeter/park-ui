import type { Meta } from 'storybook-solidjs'
import * as RadioGroup from '~/components/ui/radio-group'

const meta: Meta = {
  title: 'Components/Radio Group',
}

export default meta

export const Base = () => {
  const options = [
    { id: 'react', label: 'React' },
    { id: 'solid', label: 'Solid' },
    { id: 'svelte', label: 'Svelte', disabled: true },
    { id: 'vue', label: 'Vue' },
  ]
  return (
    <RadioGroup.Root value="react">
      {options.map((option) => (
        <RadioGroup.Item value={option.id} disabled={option.disabled}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
