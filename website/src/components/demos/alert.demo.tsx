import { InfoIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Alert, type AlertProps } from '~/components/ui/alert'
import { Heading } from '~/components/ui/heading'
import { Icon } from '~/components/ui/icon'
import { Text } from '~/components/ui/text'

export const Demo = (props: AlertProps) => {
  return (
    <Alert {...props}>
      <Stack gap="4" direction={{ base: 'column', sm: 'row' }}>
        <Icon color="fg.emphasized">
          <InfoIcon />
        </Icon>
        <Stack gap="1">
          <Heading as="h5" fontWeight="medium">
            Browser update available
          </Heading>
          <Text color="fg.muted">For the best experience, please update your browser.</Text>
        </Stack>
      </Stack>
    </Alert>
  )
}
