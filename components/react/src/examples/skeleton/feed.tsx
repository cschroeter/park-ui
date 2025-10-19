import { HStack, Stack } from 'styled-system/jsx'
import { Skeleton, SkeletonCircle, SkeletonText } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="6">
      <HStack width="full">
        <SkeletonCircle boxSize="10" />
        <SkeletonText noOfLines={2} />
      </HStack>
      <Skeleton height="200px" />
    </Stack>
  )
}
