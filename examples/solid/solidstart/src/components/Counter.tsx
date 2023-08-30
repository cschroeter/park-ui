import { createSignal } from 'solid-js'

import { Button } from './ui/button'

export default function Counter() {
  const [count, setCount] = createSignal(0)
  return (
    <Button variant="primary" size="xl" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </Button>
  )
}
