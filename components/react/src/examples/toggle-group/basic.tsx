import { ToggleGroup } from '@/components/ui'

export const App = () => {
  return (
    <ToggleGroup.Root>
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
