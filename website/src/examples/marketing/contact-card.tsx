import { HStack, Stack } from 'styled-system/jsx'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import { Heading } from '~/components/ui/heading'
import { Text } from '~/components/ui/text'

export const ContactCard = () => {
  return (
    <Stack
      gap={{ base: '6', lg: '8' }}
      p={{ base: '6', lg: '10' }}
      justify="center"
      align="center"
      borderRadius="l3"
      bg="bg.subtle"
    >
      <HStack gap="0">
        {['DE', 'SB'].map((initials, index) => (
          <Avatar key={index} _first={{ marginStart: '0' }} marginStart="-3" size="2xl">
            <AvatarFallback>{initials}</AvatarFallback>
            <AvatarImage src={`https://i.pravatar.cc/300/img=${initials}`} alt="avatar" />
          </Avatar>
        ))}
      </HStack>
      <Stack textAlign="center">
        <Heading as="h3" textStyle={{ base: 'lg', md: 'xl' }}>
          Still have questions?
        </Heading>
        <Text textStyle="lg" color="fg.muted">
          Can't find the answer you're looking for? Our team is happy to answer your questions.
        </Text>
      </Stack>

      <Button size="xl">Send us an email</Button>
    </Stack>
  )
}
