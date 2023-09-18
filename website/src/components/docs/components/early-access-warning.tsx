'use client'
import { InfoIcon, XIcon } from 'lucide-react'
import { Box, Stack } from 'styled-system/jsx'
import { useLocalStorage } from 'usehooks-ts'
import { Alert } from '~/components/ui/alert'
import { Icon } from '~/components/ui/icon'
import { IconButton } from '~/components/ui/icon-button'
import { Heading, Typography } from '~/components/ui/typography'

export const EarlyAccesWarning = () => {
  const [isVisible, setIsVisible] = useLocalStorage('earlyAccess', true)
  return isVisible ? (
    <Alert position="relative">
      <Stack gap="4" direction={{ base: 'column', sm: 'row' }}>
        <Icon color="fg.emphasized">
          <InfoIcon />
        </Icon>
        <Stack gap="1">
          <Heading as="h5" fontWeight="semibold">
            Early Access
          </Heading>
          <Typography color="fg.muted">
            Code Examples only available for React. Vue and Solid coming soon.
          </Typography>
        </Stack>
      </Stack>
      <Box position="absolute" top="2" right="2">
        <IconButton
          aria-label="Close Alert"
          variant="tertiary"
          size="xs"
          onClick={() => setIsVisible(false)}
        >
          <XIcon />
        </IconButton>
      </Box>
    </Alert>
  ) : null
}
