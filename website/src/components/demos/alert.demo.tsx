import { InfoIcon } from 'lucide-react'
import { Alert, type AlertProps } from '~/components/ui'

export const Demo = (props: AlertProps) => {
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
