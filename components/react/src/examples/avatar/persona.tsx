import { Box, HStack } from 'styled-system/jsx'
import { Avatar, Text } from '@/components/ui'

export const App = () => {
  return (
    <HStack gap="4">
      <Avatar.Root size="lg">
        <Avatar.Image src="https://avatars.githubusercontent.com/u/1846056?v=4" />
        <Avatar.Fallback name="Christian Busch" />
      </Avatar.Root>
      <Box>
        <Text fontWeight="medium">Christian Busch</Text>
        <Text color="fg.muted" textStyle="sm">
          christian@park-ui.com
        </Text>
      </Box>
    </HStack>
  )
}
