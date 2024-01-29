import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Skeleton } from '~/components/ui/skeleton'

const meta: Meta = {
  title: 'Components/Skeleton',
}

export default meta

export const Base = () => (
  <Skeleton>
    <div>contents wrapped</div>
    <div>won't be visible</div>
  </Skeleton>
)

export const Controlled = () => {
  const [hasLoaded, setHasLoaded] = useState(false)
  return (
    <>
      <Button onClick={() => setHasLoaded(!hasLoaded)}>Toggle</Button>
      <Skeleton className="h-8" isLoaded={hasLoaded}>
        <div className="h-8">Content</div>
      </Skeleton>
    </>
  )
}

export const Loaded = () => (
  <Skeleton isLoaded>
    <div>Is loaded</div>
  </Skeleton>
)
