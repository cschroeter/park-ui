import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import { Progress } from '~/components/ui/progress'

const meta: Meta = {
  title: 'Components/Progress Linear',
}

export default meta

export const Base = () => {
  return <Progress type="linear" defaultValue={20} />
}

export const Size = () => {
  return (
    <Stack>
      <Progress type="linear" defaultValue={20} size="sm" />
      <Progress type="linear" defaultValue={20} size="md" />
      <Progress type="linear" defaultValue={20} size="lg" />
    </Stack>
  )
}
