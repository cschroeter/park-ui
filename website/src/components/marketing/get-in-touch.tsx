import { HStack, Stack } from 'styled-system/jsx'
import { Avatar } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'

export const GetInTouch = () => {
  return (
    <Stack
      gap={{ base: '6', lg: '8' }}
      px={{ base: '5', lg: '8' }}
      py="8"
      justify="center"
      align="center"
      borderRadius="l3"
      bg="bg.subtle"
      borderWidth="1px"
      width="full"
    >
      <AvatarGroup
        avatars={[
          {
            name: 'Christian Schröter',
            src: 'https://avatars3.githubusercontent.com/u/1846056',
          },
          { name: 'Segun Adebayo', src: 'https://avatars2.githubusercontent.com/u/6916170' },
        ]}
      />

      <Stack textAlign="center">
        <Text textStyle={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
          Still have questions?
        </Text>
        <Text textStyle="lg" color="fg.muted">
          Can't find the answer you're looking for? Our team is happy to answer your questions.
        </Text>
      </Stack>

      <Button size="xl" alignSelf="center" asChild>
        <a
          href={`mailto:support@chakra-ui.com?subject=${encodeURIComponent('Question about Park UI Plus')}`}
        >
          Send us an email
        </a>
      </Button>
    </Stack>
  )
}

interface Props {
  avatars: { name: string; src: string }[]
}

const AvatarGroup = (props: Props) => {
  const { avatars } = props
  return (
    <HStack gap="0">
      {avatars.map((avatar) => (
        <Avatar
          key={avatar.name}
          src={avatar.src}
          name={avatar.name}
          _first={{ marginStart: '0' }}
          overflow="hidden"
          marginStart={{ base: '-3', md: '-4' }}
          size={{ base: 'xl', md: '2xl' }}
          borderWidth="2px"
          borderColor="border.emphasized"
        />
      ))}
    </HStack>
  )
}
