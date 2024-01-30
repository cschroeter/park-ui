import { CheckIcon, ChevronsUpDownIcon } from 'lucide-solid'
import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Select } from '~/components/ui/select'

const meta: Meta = {
  title: 'Components/Select',
}

export default meta

export const Base = () => {
  const items = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Svelte', value: 'svelte', disabled: true },
    { label: 'Vue', value: 'vue' },
  ]

  return (
    <Select.Root positioning={{ sameWidth: true }} width="2xs" items={items}>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <ChevronsUpDownIcon />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          <Select.ItemGroup id="framework">
            <Select.ItemGroupLabel for="framework">Framework</Select.ItemGroupLabel>
            <Index each={items}>
              {(item) => (
                <Select.Item item={item()}>
                  <Select.ItemText>{item().label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              )}
            </Index>
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}
