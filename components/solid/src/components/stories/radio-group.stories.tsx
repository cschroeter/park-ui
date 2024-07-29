import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { RadioGroup } from '~/components/ui/radio-group'

const meta: Meta = {
  title: 'Components/Radio Group',
}

export default meta

export const Base = () => {
  const frameworks = [
    { value: 'react', label: 'React' },
    { value: 'solid', label: 'Solid' },
    { value: 'svelte', label: 'Svelte', disabled: true },
    { value: 'vue', label: 'Vue' },
  ]
  return (
    <RadioGroup.Root value="react">
      <Index each={frameworks}>
        {(framework) => (
          <RadioGroup.Item value={framework().value} disabled={framework().disabled}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{framework().label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        )}
      </Index>
    </RadioGroup.Root>
  )
}
