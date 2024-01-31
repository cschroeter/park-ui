import type { Meta } from '@storybook/react'
import { Progress } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Progress Linear',
}

export default meta

export const Base = () => {
  return <Progress defaultValue={20} />
}

export const Size = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <Progress defaultValue={20} size="sm" />
      <Progress defaultValue={20} size="md" />
      <Progress defaultValue={20} size="lg" />
    </div>
  )
}
