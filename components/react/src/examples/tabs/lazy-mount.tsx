'use client'
import { useEffect, useState } from 'react'
import { Tabs } from '@/components/ui'

export const App = () => {
  return (
    <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="tab-1">
        Tab 1: Content <TickValue />
      </Tabs.Content>
      <Tabs.Content value="tab-2">
        Tab 2: Content <TickValue />
      </Tabs.Content>
      <Tabs.Content value="tab-3">
        Tab 3: Content <TickValue />
      </Tabs.Content>
    </Tabs.Root>
  )
}

const TickValue = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setValue((v) => v + 1)
    }, 1000)
    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return <span style={{ fontWeight: 'bold', color: 'tomato', padding: 4 }}>{value}</span>
}
