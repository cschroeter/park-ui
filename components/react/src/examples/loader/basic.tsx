import { Stack } from 'styled-system/jsx'
import { Button, Loader } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4">
      <Loader>Loading content...</Loader>
      <Loader spinnerPlacement="end">Processing</Loader>
      <Button disabled>
        <Loader visible>Submit</Loader>
      </Button>
    </Stack>
  )
}
