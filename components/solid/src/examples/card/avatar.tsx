import { CheckIcon, XIcon } from 'lucide-solid'
import { HStack, Stack } from 'styled-system/jsx'
import { Avatar, Button, Card, Text } from '@/components/ui'

export const App = () => {
  return (
    <Card.Root width={{ base: 'full', md: '50%' }}>
      <Card.Header>
        <HStack gap="3">
          <Avatar.Root>
            <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
            <Avatar.Fallback name="Nate Foss" />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              Nate Foss
            </Text>
            <Text color="fg.muted" textStyle="sm">
              @natefoss
            </Text>
          </Stack>
        </HStack>
      </Card.Header>
      <Card.Body>
        <Card.Description>
          Nate Foss has requested to join your team. You can approve or decline their request.
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button variant="subtle" colorPalette="red" flex="1">
          <XIcon />
          Decline
        </Button>
        <Button variant="subtle" colorPalette="green" flex="1">
          <CheckIcon />
          Approve
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}
