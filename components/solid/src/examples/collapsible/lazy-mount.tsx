import { Box } from 'styled-system/jsx'
import { Button, Collapsible } from '@/components/ui'

export const App = () => {
  return (
    <Collapsible.Root lazyMount>
      <Collapsible.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" {...triggerProps()}>
            Toggle
          </Button>
        )}
      />
      <Collapsible.Content>
        <Box p="4" mt="3" borderWidth="1px">
          If you inspect the DOM, you'll notice that the content is unmounted when collapsed. This
          is useful for performance reasons when you have a lot of collapsible content.
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
