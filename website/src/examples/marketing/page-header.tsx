import { Stack } from 'styled-system/jsx'
import { Heading } from '~/components/ui/heading'
import { Text } from '~/components/ui/text'

export const PageHeader = () => {
  return (
    <Stack gap={{ base: '4', md: '6' }} align="center" textAlign="center">
      <Stack gap="3" align="center">
        <Text textStyle={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="accent.default">
          Pricing
        </Text>
        <Heading textStyle={{ base: '4xl', md: '5xl' }}>Choose Your Path to Success</Heading>
      </Stack>
      <Text color="fg.muted" textStyle={{ base: 'lg', md: 'xl' }} maxW="3xl" textAlign="center">
        From startups taking their first step, to corporations requiring robust digital solutions,
        we have the right option for everyone.
      </Text>
    </Stack>
  )
}
