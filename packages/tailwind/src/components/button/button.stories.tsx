import { ArrowRightIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from './snippet'

export const Demo = () => {
  const [state, setState] = useState(false)
  return (
    <div className="inline-flex flex-col">
      {state ? 'Active' : 'Inactive'}
      <Button onClick={() => setState(!state)}>
        Toggle
        <ArrowRightIcon />
      </Button>
    </div>
  )
}
