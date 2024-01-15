import { HStack, Stack } from 'styled-system/jsx'
import { Skeleton, type SkeletonProps } from '~/components/ui/skeleton'

export const Demo = (props: SkeletonProps) => {
  return (
    <HStack>
      <Skeleton {...props} width={'64px'} height={'64px'} />
      <Stack>
        <Skeleton {...props} width={'200px'} height={'12px'} />
        <Skeleton {...props} width={'180px'} height={'12px'} />
        <Skeleton {...props} width={'120px'} height={'12px'} />
      </Stack>
    </HStack>
  )
}
