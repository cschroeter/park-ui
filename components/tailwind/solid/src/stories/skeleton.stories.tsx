import { createSignal } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Button, Skeleton } from '~/components/ui'

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
        <div class="h-8">Content</div>
      </Skeleton>
    </>
  )
}

export const Loaded = () => (
  <Skeleton isLoaded>
    <div>Is loaded</div>
  </Skeleton>
)
