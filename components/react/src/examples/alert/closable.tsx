import { Alert, CloseButton } from '@/components/ui'

export const App = () => {
  return (
    <Alert.Root>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>This is a title</Alert.Title>
        <Alert.Description>This is a description</Alert.Description>
      </Alert.Content>
      <CloseButton pos="relative" top="-2" insetEnd="-2" colorPalette="blue" size="sm" />
    </Alert.Root>
  )
}
