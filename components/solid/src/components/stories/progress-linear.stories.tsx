import type { Meta } from 'storybook-solidjs'
import { Stack } from 'styled-system/jsx'
import { Progress } from '~/components/ui/progress'

const meta: Meta = {
  title: 'Components/Progress Linear',
}

export default meta

export const Base = () => {
  return <Progress value={20} />
}

export const Size = () => {
  return (
    <Stack>
      <Progress value={20} size="sm" />
      <Progress value={20} size="md" />
      <Progress value={20} size="lg" />
    </Stack>
  )
}
