import type { Meta } from '@storybook/react'
import { InfoIcon } from 'lucide-react'
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  type AlertProps,
} from '~/components/ui/alert'

const meta: Meta<AlertProps> = {
  title: 'Alert',
  component: Alert,
}

export default meta

export const Basic = () => {
  return (
    <Alert>
      <AlertIcon asChild>
        <InfoIcon />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Browser Update available</AlertTitle>
        <AlertDescription>For the best experience, please update your browser.</AlertDescription>
      </AlertContent>
    </Alert>
  )
}
