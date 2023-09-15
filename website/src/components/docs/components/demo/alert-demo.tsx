import { InfoIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Alert, type AlertProps } from '~/components/ui/alert'
import { Icon } from '~/components/ui/icon'
import { Heading, Typography } from '~/components/ui/typography'

export const AlertDemo = (props: AlertProps) => {
  return (
    <Alert {...props}>
      <Stack gap="4" direction={{ base: 'column', sm: 'row' }}>
        <Icon size="sm" color="fg.emphasized">
          <InfoIcon />
        </Icon>
        <Stack gap="1">
          <Heading as="h5" fontWeight="medium">
            Browser update available
          </Heading>
          <Typography color="fg.muted">
            For the best experience, please update your browser.
          </Typography>
        </Stack>
      </Stack>
    </Alert>
  )
}
