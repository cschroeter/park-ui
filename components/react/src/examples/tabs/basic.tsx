import { Tabs } from '@/components/ui'

export const App = () => {
  return (
    <Tabs.Root defaultValue="react">
      <Tabs.List>
        <Tabs.Trigger value="react">React</Tabs.Trigger>
        <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
        <Tabs.Trigger value="svelte">Svelte</Tabs.Trigger>
        <Tabs.Trigger value="vue">Vue</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="react">Know React? Check out Solid!</Tabs.Content>
      <Tabs.Content value="solid">Know Solid? Check out Svelte!</Tabs.Content>
      <Tabs.Content value="svelte">Know Solid? Check out Vue!</Tabs.Content>
      <Tabs.Content value="vue">Know Vue? Check out React!</Tabs.Content>
    </Tabs.Root>
  )
}
