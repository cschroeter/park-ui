import { InfoIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Alert } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Alert',
}

export default meta

export const Base = () => {
  return (
    <Alert.Root>
      <Alert.Icon>
        <InfoIcon />
      </Alert.Icon>
      <Alert.Content>
        <Alert.Title>Browser Update available</Alert.Title>
        <Alert.Description>For the best experience, please update your browser.</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}
