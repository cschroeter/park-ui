import { For } from 'solid-js'
import { Tabs } from '~/components/ui/tabs'

export const Demo = (props: Tabs.RootProps) => {
  const options = [
    { id: 'react', label: 'React' },
    { id: 'solid', label: 'Solid' },
    { id: 'svelte', label: 'Svelte' },
    { id: 'vue', label: 'Vue' },
  ]
  return (
    <Tabs.Root defaultValue="react" {...props}>
      <Tabs.List>
        <For each={options}>
          {(option) => (
            <Tabs.Trigger value={option.id} disabled={option.id === 'svelte'}>
              {option.label}
            </Tabs.Trigger>
          )}
        </For>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="react">Know React? Check out Solid!</Tabs.Content>
      <Tabs.Content value="solid">Know Solid? Check out Svelte!</Tabs.Content>
      <Tabs.Content value="svelte">Know Svelte? Check out Vue!</Tabs.Content>
      <Tabs.Content value="vue">Know Vue? Check out React!</Tabs.Content>
    </Tabs.Root>
  )
}
