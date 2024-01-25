import { createSignal } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
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
  const [hasLoaded, setHasLoaded] = createSignal(false)
  return (
    <>
      <Button onClick={() => setHasLoaded((x) => !x)}>Toggle</Button>
      <Skeleton isLoaded={hasLoaded()}>
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
