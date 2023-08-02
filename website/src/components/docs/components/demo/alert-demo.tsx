import { FiInfo } from 'react-icons/fi'
import { Box, Stack } from 'styled-system/jsx'
import { Alert, type AlertProps } from '~/components/alert'
import { Heading, Typography } from '~/components/typography'

export const AlertDemo = (props: AlertProps) => {
  return (
    <Alert {...props}>
      <Stack gap="4" direction={{ base: 'column', sm: 'row' }}>
        <Box fontSize="1.25rem" color="fg.emphasized">
          <FiInfo />
        </Box>
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
