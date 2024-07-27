import type { Meta } from 'storybook-solidjs'
import { Button } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Button',
}

export default meta

export const Base = () => <Button>Park UI</Button>
export const Loading = () => <Button loading>Park UI</Button>
export const LoadingText = () => (
  <Button loading loadingText="Loading...">
    Park UI
  </Button>
)
