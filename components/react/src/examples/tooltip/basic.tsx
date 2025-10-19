import { Button, Tooltip } from '@/components/ui'

export const App = () => {
  return (
    <Tooltip content="This is the tooltip content">
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}
