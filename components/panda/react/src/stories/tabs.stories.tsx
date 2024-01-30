import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import { Tabs } from '~/components/ui/tabs'

const meta: Meta = {
  title: 'Components/Tabs',
}

export default meta

export const Base = () => {
  return (
    <Tabs.Root defaultValue="react">
      <Tabs.List>
        {options.map((option) => (
          <Tabs.Trigger key={option.id} value={option.id} disabled={option.disabled}>
            {option.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="react">Know React? Check out Solid!</Tabs.Content>
      <Tabs.Content value="solid">Know Solid? Check out Svelte!</Tabs.Content>
      <Tabs.Content value="svelte">Know Svelte? Check out Vue!</Tabs.Content>
      <Tabs.Content value="vue">Know Vue? Check out React!</Tabs.Content>
    </Tabs.Root>
  )
}

export const Sizes = () => {
  return (
    <Stack gap="3">
      <Tabs.Root defaultValue="react" variant="enclosed" size="sm">
        <Tabs.List>
          {options.map((option) => (
            <Tabs.Trigger key={option.id} value={option.id} disabled={option.disabled}>
              {option.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
      <Tabs.Root defaultValue="react" variant="enclosed" size="md">
        <Tabs.List>
          {options.map((option) => (
            <Tabs.Trigger key={option.id} value={option.id} disabled={option.disabled}>
              {option.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
      <Tabs.Root defaultValue="react" variant="enclosed" size="lg">
        <Tabs.List>
          {options.map((option) => (
            <Tabs.Trigger key={option.id} value={option.id} disabled={option.disabled}>
              {option.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
    </Stack>
  )
}

const options = [
  { id: 'react', label: 'React' },
  { id: 'solid', label: 'Solid' },
  { id: 'svelte', label: 'Svelte', disabled: true },
  { id: 'vue', label: 'Vue' },
]
