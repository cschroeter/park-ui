import { Box } from 'styled-system/jsx'
import { Button, Collapsible } from '@/components/ui'

export const App = () => {
  return (
    <Collapsible.Root unmountOnExit>
      <Collapsible.Trigger asChild>
        <Button variant="outline">Toggle</Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Box p="4" mt="3" borderWidth="1px">
          If you inspect the DOM, you'll notice that the content will be initially mounted and
          unmounted when collapsed. This is useful for improving performance and preventing
          background processes (like timers or API calls) from running when the content is hidden.
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
