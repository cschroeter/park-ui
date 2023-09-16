'use client'
import { XIcon } from 'lucide-react'
import { FiInfo } from 'react-icons/fi'
import { Box, Stack } from 'styled-system/jsx'
import { useLocalStorage } from 'usehooks-ts'
import { Alert } from '~/components/ui/alert'
import { IconButton } from '~/components/ui/icon-button'
import { Heading, Typography } from '~/components/ui/typography'

export const EarlyAccesWarning = () => {
  const [isVisible, setIsVisible] = useLocalStorage('earlyAccess', true)
  return isVisible ? (
    <Alert position="relative">
      <Stack gap="4" direction={{ base: 'column', sm: 'row' }}>
        <Box fontSize="1.25rem" color="fg.emphasized">
          <FiInfo />
        </Box>
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
