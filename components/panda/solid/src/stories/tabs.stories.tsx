import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Tabs } from '~/components/ui/tabs'

const meta: Meta = {
  title: 'Components/Tabs',
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
    <Tabs.Root value="react">
      <Tabs.List>
        <Index each={options}>
          {(option) => (
            <Tabs.Trigger value={option().id} disabled={option().disabled}>
              {option().label}
            </Tabs.Trigger>
          )}
        </Index>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="react">Know React? Check out Solid!</Tabs.Content>
      <Tabs.Content value="solid">Know Solid? Check out Svelte!</Tabs.Content>
      <Tabs.Content value="svelte">Know Svelte? Check out Vue!</Tabs.Content>
      <Tabs.Content value="vue">Know Vue? Check out React!</Tabs.Content>
    </Tabs.Root>
  )
}
