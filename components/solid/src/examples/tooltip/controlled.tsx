import { createSignal } from 'solid-js'

import { Button, Tooltip } from '@/components/ui'

export const App = () => {
  const [open, setOpen] = createSignal(false)
  return (
    <Tooltip
      content="This is the tooltip content"
      open={open()}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Button variant="outline" size="sm">
        {open() ? 'Hide' : 'Show'} Tooltip
      </Button>
    </Tooltip>
  )
}
