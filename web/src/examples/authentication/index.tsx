import { Box, Center, Flex, HStack, Stack } from 'styled-system/jsx'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Heading } from '~/components/ui/heading'
import { Text } from '~/components/ui/text'
import { Logo } from './logo'
import { SignInForm } from './signin-form'

export const Authentication = () => {
  return (
    <Flex borderWidth="1px" borderRadius="l3" overflow="hidden">
      <Box flex="1" display={{ base: 'none', md: 'block' }} bg="bg.subtle">
        <Flex direction="column" px={{ base: '4', md: '8' }} height="full">
          <Flex align="center" h="24">
            <Logo />
          </Flex>
          <Flex flex="1" align="center">
            <Stack gap="8">
              <Stack gap="6">
                <Heading as="h1" textStyle={{ md: '5xl' }}>
                  Build your own Design System today.
                </Heading>
                <Text textStyle="lg" maxW="md" color="fg.muted">
                  Create an account and discover the worlds' best UI component framework.
                </Text>
              </Stack>
              <HStack gap="4">
                <HStack gap="0">
                  {['PA', 'SB', 'MO', 'RS', 'ZT'].map((initials, index) => (
                    <Avatar key={index} _first={{ marginStart: '0' }} marginStart="-3" size="lg">
                      <AvatarFallback>{initials}</AvatarFallback>
                      <AvatarImage src={`https://i.pravatar.cc/300/img=${initials}`} alt="avatar" />
                    </Avatar>
                  ))}
                </HStack>
                <Text fontWeight="medium">Join 10.000+ users</Text>
              </HStack>
            </Stack>
          </Flex>
          <Flex align="center" h="24">
            <Text color="fg.subtle" textStyle="sm">
              © 2023 All rights reserved.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Center flex="1" py={{ base: '16', md: '24' }}>
        <SignInForm />
      </Center>
    </Flex>
  )
}
