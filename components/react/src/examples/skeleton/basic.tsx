import { Stack } from 'styled-system/jsx'
import { Skeleton } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4" maxW="sm">
      <Skeleton height="4" />
      <Skeleton height="6" width="3/4" />
      <Skeleton height="4" width="1/2" />
      <Stack direction="row" gap="3" align="center">
        <Skeleton width="12" height="12" rounded="full" />
        <Stack gap="2" flex="1">
          <Skeleton height="3" />
          <Skeleton height="3" width="2/3" />
        </Stack>
      </Stack>
    </Stack>
  )
}
