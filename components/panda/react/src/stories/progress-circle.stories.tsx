import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import { Progress } from '~/components/ui/progress'

const meta: Meta = {
  title: 'Components/Progress Circular',
}

export default meta

export const Base = () => {
  return <Progress type="circular" defaultValue={20} size="md" />
}

export const Size = () => {
  return (
    <Stack>
      <Progress type="circular" defaultValue={20} size="sm" />
      <Progress type="circular" defaultValue={20} size="md" />
      <Progress type="circular" defaultValue={20} size="lg" />
    </Stack>
  )
}
