import { InfoIcon } from 'lucide-react'
import { Alert } from '~/components/ui/alert'

export const Demo = (props: Alert.RootProps) => {
  return (
    <Alert.Root {...props}>
      <Alert.Icon asChild>
        <InfoIcon />
      </Alert.Icon>
      <Alert.Content>
        <Alert.Title>Browser Update available</Alert.Title>
        <Alert.Description>For the best experience, please update your browser.</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}
