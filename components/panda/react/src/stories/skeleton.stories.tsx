import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { Box } from 'styled-system/jsx'
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
      <Skeleton isLoaded={hasLoaded} height="8">
        <Box height="8">Content</Box>
      </Skeleton>
    </>
  )
}

export const Loaded = () => (
  <Skeleton isLoaded>
    <Box>Is loaded</Box>
  </Skeleton>
)
