import { Circle, HStack, Stack } from 'styled-system/jsx'
import { Skeleton } from '~/components/ui/skeleton'

export const Demo = () => {
  return (
    <HStack width="full" gap="4">
      <Skeleton borderRadius="full">
        <Circle size="20" />
      </Skeleton>
      <Stack gap="3.5" width="full">
        <Skeleton h="4" />
        <Skeleton h="4" width="80%" />
        <Skeleton h="4" width="60%" />
      </Stack>
    </HStack>
  )
}
