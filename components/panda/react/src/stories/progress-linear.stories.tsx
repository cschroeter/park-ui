import type { Meta } from '@storybook/react'
import { Stack } from 'styled-system/jsx'
import { Progress } from '~/components/ui/progress'

const meta: Meta = {
  title: 'Components/Progress Linear',
}

export default meta

export const Base = () => {
  return <Progress defaultValue={20} />
}

export const Size = () => {
  return (
    <Stack>
      <Progress defaultValue={20} size="sm" />
      <Progress defaultValue={20} size="md" />
      <Progress defaultValue={20} size="lg" />
    </Stack>
  )
}
