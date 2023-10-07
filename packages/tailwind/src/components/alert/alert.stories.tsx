import { InfoIcon } from 'lucide-react'
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  type AlertProps,
} from './snippet'

export const Demo = (props: AlertProps) => {
  return (
    <Alert {...props}>
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
