import type { Meta } from 'storybook-solidjs'
import { Stack } from 'styled-system/jsx'
import { Progress } from '~/components/ui/progress'

const meta: Meta = {
  title: 'Components/Progress Circular',
}

export default meta

export const Base = () => {
  return <Progress type="circular" value={20} size="md" />
}

export const Size = () => {
  return (
    <Stack>
      <Progress type="circular" value={20} size="sm" />
      <Progress type="circular" value={20} size="md" />
      <Progress type="circular" value={20} size="lg" />
    </Stack>
  )
}
