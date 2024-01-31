import type { Meta } from '@storybook/react'
import { Box, Container, Stack } from 'styled-system/jsx'
import { Button, Text } from '~/components/ui'

const meta: Meta = {
  title: 'Examples',
}

export default meta

export const Banner = () => {
  return (
    <Box pb={{ base: '12', md: '24' }}>
      <Box borderBottomWidth="1px" bg="bg.default">
        <Container py={{ base: '4', md: '3.5' }} px="4">
          <Stack
            gap="4"
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'flex-start', md: 'space-between' }}
          >
            <Box pe={{ base: '4', md: '0' }}>
              <Text fontWeight="medium">Stay Ahead with our Newsletter</Text>
              <Text color="fg.muted">
                Embrace trends, industry insights, and actionable advice.
              </Text>
            </Box>
            <Stack
              gap="3"
              direction={{ base: 'column', md: 'row' }}
              alignItems={{ base: 'stretch', md: 'center' }}
            >
              <Button>Sign Up</Button>
              <Button variant="outline">No, Thanks</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
