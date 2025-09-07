'use client'
import { useState } from 'react'
import { Button, Tooltip } from '@/components/ui'

export const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <Tooltip
      content="This is the tooltip content"
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Button variant="outline" size="sm">
        {open ? 'Hide' : 'Show'} Tooltip
      </Button>
    </Tooltip>
  )
}
